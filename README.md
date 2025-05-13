# Serbia Rentals

Serbia Rentals is a web application designed to connect users with rental properties across Serbia. It allows users to browse available listings, view property details, save their favorite properties, and contact property owners. Property owners can list their properties, upload images, and manage their listings.

## Features

### 🔐 User Authentication

- Secure Google Sign-In/Sign-Up (via NextAuth.js)
- Session management

### 🏡 Property Management (for Owners)

- **List Properties**: Add new rental properties with comprehensive details:
  - Type, Name, Description
  - Location (Street, City, Zipcode)
  - Beds, Baths, Square Meters
  - Amenities (checklist)
  - Rental Rates (Nightly, Weekly, Monthly)
  - Seller Information (Name, Email, Phone)
- **Image Uploads**: Upload multiple images for property listings (hosted on Cloudinary).
- **Edit Listings**: Modify details of existing properties.
- **Delete Listings**: Remove properties (also deletes associated images from Cloudinary).
- **Featured Properties**: Mark properties as "featured" to highlight them (atm can only be done through be, not implemented on the client side)

### 🔎 Property Discovery (for Users)

- **Browse Properties**: View all listed properties with pagination.
- **Detailed View**: Access individual property pages with:
  - Image gallery with lightbox (PhotoSwipe)
  - Full description, amenities, and rates
  - Location map
- **Search**: Find properties based on keywords (location, name, description) and property type.
- **Featured Section**: View specially highlighted "Featured Properties" on the homepage.
- **Homepage**: Displays Hero section, Info Boxes, Featured Properties, and Recent Properties.

### 👤 User Interaction & Personalization

- **Bookmarks**: Save favorite properties to a personal list.
- **Saved Properties Page**: View and manage bookmarked properties.
- **Messaging System**:
  - Contact property owners directly through a form on property pages.
  - Dedicated messages page to view incoming inquiries.
  - Mark messages as read/unread.
  - Delete messages.
  - Unread message count indicator in the navbar.
- **Share Properties**: Share property listings via Facebook, Twitter, WhatsApp, and Email.
- **User Profile Page**:
  - View user's name, email, and profile image.
  - Access a list of properties the user owns, with quick links to edit/delete.

### ✨ User Experience

- Responsive design for various screen sizes.
- Toast notifications for actions (e.g., message sent, property bookmarked).
- Loading states and not-found pages for better UX.
- Global context for managing unread message counts.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: JavaScript
- **Authentication**: NextAuth.js (Google Provider)
- **Database**: MongoDB with Mongoose ODM
- **Styling**: Tailwind CSS
- **Image Hosting & Management**: Cloudinary
- **Mapping**: `react-map-gl/mapbox` (Mapbox GL JS) for map display, `react-geocode` (Google Geocoding API) for address to coordinates conversion.
- **Notifications**: `react-toastify`
- **Image Gallery**: `react-photoswipe-gallery`
- **Social Sharing**: `react-share`
- **Deployment**: Vercel

## Environment Variables

The following environment variables are required to run the application.

```
# MongoDB Connection
MONGODB_URI=""

# Google OAuth Credentials (for NextAuth)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# NextAuth Configuration
NEXTAUTH_URL="http://localhost:3000" # For development. Vercel handles this in production.
NEXTAUTH_SECRET="" # Generate a random string: openssl rand -base64 32

# Google Geocoding API Key (for react-geocode)
NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY=""

# Mapbox Access Token (for react-map-gl)
NEXT_PUBLIC_MAPBOX_TOKEN=""

# Cloudinary Credentials
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""

# Public URL of the application (used for share links, etc.)
NEXT_PUBLIC_DOMAIN="http://localhost:3000" # Change to your production domain when deployed
```

**Note**: In a production environment like Vercel, ensure these environment variables are set in your project's settings.

## Contributing

Contributions are welcome! Here's how you can help:

- 🐛 Report bugs by opening an issue.
- 💡 Propose new features or improvements.
- 🔧 Submit pull requests.
