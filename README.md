This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### MongoDB Setup

This application uses MongoDB for data storage. You need to set up a MongoDB database before running the application:

1. Create a MongoDB Atlas account at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster and database
3. Get your connection string from MongoDB Atlas
4. Create a `.env.local` file in the root directory with the following content:

```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
AUTH_SECRET=your_auth_secret
DATABASE_URL="your_mongodb_connection_string"
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

### Running the Application

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Migrating Data

If you have existing data in the JSON file and want to migrate it to MongoDB, you can use the migration endpoint:

```bash
curl -X POST http://localhost:3000/api/migrate
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Environment Variables for Deployment

When deploying to Vercel, make sure to set the following environment variables in your Vercel project settings:

- `GOOGLE_CLIENT_ID`: Your Google OAuth client ID
- `GOOGLE_CLIENT_SECRET`: Your Google OAuth client secret
- `GITHUB_CLIENT_ID`: Your GitHub OAuth client ID
- `GITHUB_CLIENT_SECRET`: Your GitHub OAuth client secret
- `AUTH_SECRET`: A secret string for NextAuth.js
- `DATABASE_URL`: Your MongoDB connection string

### Database Considerations

Since Vercel deployments are read-only, we use MongoDB instead of a local JSON file for data storage. This ensures that your application can read and write data in production environments.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
