// const { db } = require('@vercel/postgres');

// async function seedSignatures(client) {
//   try {
//     // Create the "signatures" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS signatures (
//         user_id VARCHAR(28) PRIMARY KEY,
//         username VARCHAR(50) NOT NULL,
//         message VARCHAR(50) NOT NULL,
//         platform VARCHAR(10) NOT NULL.
//         date DATE NOT NULL
//       );
//     `;
    
//     console.log(`Created "signatures" table`);

//     // Insert data into the "signatures" table
//     const insertedsignatures = await Promise.all(
//       signatures.map(
//         (signature) => client.sql`
//         INSERT INTO signatures (user_id, username, message, platform, date)
//         VALUES (${signature.user_id}, ${signature.username}, ${signature.message}, ${signature.platform}, ${signature.date})
//         ON CONFLICT (user_id) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedsignatures.length} signatures`);

//     return {
//       createTable,
//       signatures: insertedsignatures,
//     };
//   } catch (error) {
//     console.error('Error seeding signatures:', error);
//     throw error;
//   }
// }


// async function main() {
//   const client = await db.connect();

//   await seedSignatures(client);

//   await client.end();
// }

// main().catch((err) => {
//   console.error(
//     'An error occurred while attempting to seed the database:',
//     err,
//   );
// });