#!/usr/bin/env node

/**
 * LinkedIn Profile Image Extractor
 *
 * This script helps extract profile images from LinkedIn profiles
 * Note: LinkedIn has restrictions on direct image access, so manual download is recommended
 */

const teamMembers = [
  {
    name: "Rupali B",
    linkedinUrl: "https://linkedin.com/in/rupali-bhatnagar-b4864957",
    filename: "rupali-b.jpg",
  },
  {
    name: "Keerti Kaushik",
    linkedinUrl: "https://linkedin.com/in/kumkirt",
    filename: "keerti-kaushik.jpg",
  },
  {
    name: "Khushboo P",
    linkedinUrl: "https://www.linkedin.com/in/khushbooparasrampuria/",
    filename: "khushboo-p.jpg",
  },
  {
    name: "Tipu Ali Khan",
    linkedinUrl: "https://www.linkedin.com/in/tipu-ali-khan/",
    filename: "tipu-ali-khan.jpg",
  },
  {
    name: "Pooja H Patel",
    linkedinUrl: "https://www.linkedin.com/in/poojahpatel/",
    filename: "pooja-h-patel.jpg",
  },
];

console.log("🔗 LinkedIn Profile Image Helper");
console.log("================================\n");

console.log("📋 Team Member LinkedIn Profiles:\n");

teamMembers.forEach((member, index) => {
  console.log(`${index + 1}. ${member.name}`);
  console.log(`   LinkedIn: ${member.linkedinUrl}`);
  console.log(`   Target filename: ${member.filename}`);
  console.log("");
});

console.log("📝 Instructions:");
console.log("1. Visit each LinkedIn profile above");
console.log("2. Right-click on the profile picture");
console.log("3. Select 'Save image as...'");
console.log("4. Save with the exact filename shown above");
console.log("5. Place all images in: /public/images/team/");
console.log("");
console.log("⚠️  Note: LinkedIn profile images are typically at:");
console.log("   - 400x400px or 200x200px resolution");
console.log("   - JPG or PNG format");
console.log("   - May require login to LinkedIn to access");
console.log("");
console.log(
  "✅ Once saved, the Team component will automatically use these images!"
);
