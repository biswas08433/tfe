import fs from 'fs';
import { join, extname } from 'path';

// Types
interface Experience {
	id: number;
	title: string;
	date: string;
	location: string;
	description: string;
	gallery: { src: string; caption: string }[];
	testimonial: { quote: string; author: string };
}

interface Testimonial {
	quote: string;
	author: string;
}

// Configuration
const IMAGES_DIR = 'static/images/experiences';
const OUTPUT_FILE = 'src/lib/stores/experiences_new.ts';

// Helper function to format folder names to readable titles
const formatTitle = (folderName: string): string => {
	return folderName
		.replace(/_/g, ' ')
		.replace(/\b\w/g, (l: string) => l.toUpperCase())
		.replace(/Trek$/, 'Trek')
		.replace(/Day Trek/i, 'Day Trek')
		.replace(/Short Trek/i, 'Short Trek');
};

// Helper function to generate location based on folder name
const getLocation = (folderName: string): string => {
	const lowerName = folderName.toLowerCase();

	const locationMap: Record<string, string> = {
		nepal: 'Nepal',
		sikkim: 'Sikkim, India',
		purulia: 'Purulia, West Bengal, India',
		chatakpur: 'Darjeeling, West Bengal, India',
	};

	// Check for specific location keywords
	for (const [keyword, location] of Object.entries(locationMap)) {
		if (lowerName.includes(keyword)) return location;
	}

	// Check for Uttarakhand treks
	const uttarakhandKeywords = ['uttarakhand', 'deoriatal', 'tunganath', 'chandrashila', 'pangarchula'];
	if (uttarakhandKeywords.some(keyword => lowerName.includes(keyword))) {
		return 'Uttarakhand, India';
	}

	// Check for Sikkim treks
	const sikkimKeywords = ['hilley', 'versy'];
	if (sikkimKeywords.some(keyword => lowerName.includes(keyword))) {
		return 'Sikkim, India';
	}

	return 'Himalayas'; // Default
};

// Helper function to generate descriptions
const getDescription = (folderName: string): string => {
	const title = formatTitle(folderName);
	return `Our team successfully led adventurers through the ${title}, experiencing breathtaking views and unforgettable moments in the mountains.`;
};

// Helper function to generate dates
const getDate = (index: number): string => {
	const months = [
		'January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'
	];

	const year = 2024 + (index % 2); // Alternates between 2024 and 2025
	const month = months[(index * 2) % 12];
	return `${month} ${year}`;
};

// Helper function to check if file is supported media
const isSupportedMedia = (filename: string): boolean => {
	const supportedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.mp4', '.webm'];
	const ext = extname(filename).toLowerCase();
	return supportedExtensions.includes(ext);
};

// Helper function to generate testimonials
const getTestimonial = (): Testimonial => {
	const testimonials: Testimonial[] = [
		{
			quote: "An incredible journey that pushed my limits and rewarded me with unforgettable memories. The guides were exceptional!",
			author: "Sarah M., United Kingdom"
		},
		{
			quote: "The trek was challenging but absolutely worth it. Professional guidance and stunning scenery made this trip perfect.",
			author: "Raj P., Mumbai, India"
		},
		{
			quote: "Life-changing experience! The team's expertise and the natural beauty we encountered will stay with me forever.",
			author: "Michael K., Germany"
		},
		{
			quote: "Outstanding organization and incredible views. This trek exceeded all my expectations.",
			author: "Priya S., Delhi, India"
		},
		{
			quote: "The perfect blend of adventure and safety. Our guides made sure we had an amazing time while staying secure.",
			author: "James L., Australia"
		}
	];

	return testimonials[Math.floor(Math.random() * testimonials.length)];
};

// Natural sort function for numbered files
const naturalSort = (a: string, b: string): number => {
	const aNum = parseInt(a.match(/(\d+)/)?.[1] || '0');
	const bNum = parseInt(b.match(/(\d+)/)?.[1] || '0');
	return aNum - bNum;
};

// Function to check if directory exists
const directoryExists = async (dirPath: string): Promise<boolean> => {
	try {
		const stat = await fs.promises.stat(dirPath);
		return stat.isDirectory();
	} catch {
		return false;
	}
};

// Function to get directories from a path
const getDirectories = async (dirPath: string): Promise<string[]> => {
	const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });
	return entries
		.filter(dirent => dirent.isDirectory())
		.map(dirent => dirent.name)
		.filter(name => name !== 'collage'); // Exclude collage folder
};

// Function to get media files from directory
const getMediaFiles = async (dirPath: string): Promise<string[]> => {
	const files = await fs.promises.readdir(dirPath);
	return files
		.filter(isSupportedMedia)
		.sort(naturalSort);
};

// Main function to generate experiences
const generateExperiences = async (): Promise<void> => {
	try {
		// Check if images directory exists
		if (!(await directoryExists(IMAGES_DIR))) {
			console.error(`Directory ${IMAGES_DIR} does not exist!`);
			return;
		}

		// Get all experience folders
		const folders = await getDirectories(IMAGES_DIR);
		console.log(`Found ${folders.length} experience folders:`, folders);

		// Generate experiences data
		const experiences: Experience[] = await Promise.all(
			folders.map(async (folder, index) => {
				const folderPath = join(IMAGES_DIR, folder);
				const files = await getMediaFiles(folderPath);

				console.log(`  ${folder}: ${files.length} media files`);

				const gallery = files.map((file, fileIndex) => ({
					src: `/images/experiences/${folder}/${file}`,
					caption: `${formatTitle(folder)} - Image ${fileIndex + 1}`
				}));

				return {
					id: index + 1,
					title: formatTitle(folder),
					date: getDate(index),
					location: getLocation(folder),
					description: getDescription(folder),
					gallery,
					testimonial: getTestimonial()
				};
			})
		);

		// Generate TypeScript content
		const tsContent = `export interface Experience {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  gallery: { src: string; caption: string }[];
  testimonial: { quote: string; author: string };
}

export const experiences: Experience[] = ${JSON.stringify(experiences, null, 2)};
`;

		// Write to file
		fs.writeFile(OUTPUT_FILE, tsContent, (err) => {
			if (err) {
				console.error(`Error writing to ${OUTPUT_FILE}:`, err);
			} else {
				console.log(`\n✅ Successfully generated ${OUTPUT_FILE} with ${experiences.length} experiences`);
			}
		});

		// Log summary
		experiences.forEach(exp => {
			console.log(`   - ${exp.title} (${exp.gallery.length} images)`);
		});

	} catch (error) {
		console.error('Error generating experiences:', error);
	}
};

// Additional utility function to update existing file with new folders
const updateExperiences = async (): Promise<void> => {
	console.log('🔄 Scanning for new experience folders...');
	await generateExperiences();
};

// Run the script if called directly
const main = async (): Promise<void> => {
	console.log('🏔️  Experience Generator Starting...\n');
	await generateExperiences();
};

// Export functions for module usage
export { generateExperiences, updateExperiences };

// Run if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
	main().catch(console.error);
}