// export default function handler(req, res){
//     res.status(200).json({ text: 'Hello' });
// }

/*
Do Not Fetch an API Route from getStaticProps or getStaticPaths
You should not fetch an API Route from getStaticProps or getStaticPaths. 
Instead, write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function).

Here’s why: getStaticProps and getStaticPaths run only on the server-side and 
will never run on the client-side. Moreover, these functions will not be included in the JS bundle for the
Browser. That means you can write code such as direct database queries without sending them to browsers. 
Read the Writing Server-Side code documentation to learn more. 
*/