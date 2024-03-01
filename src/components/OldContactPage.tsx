export default function OldContact () {
  return(
    <div>
      <h1>Old Contact Page</h1>
    </div>
  )
}

// "use client"
// import Button from "@/components/Button";
// import Heading from "@/components/Heading";
// import { sendMail } from "@/service/mail";
// import { useState, ChangeEvent, FormEvent } from "react";

// interface FormData {
//   from: string;
//   name: string;
//   subject: string;
//   body: string;
// }

// const Contact = () => {
//   const [formData, setFormData] = useState<FormData>({
//     from: "",
//     name: "",
//     subject: "",
//     body: "",
//   });

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(formData);
//     await sendMail(formData);
//     // clear
//     setFormData({
//       from: "",
//       name: "",
//       subject: "",
//       body: "",
//     });
//   };

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <section className="flex justify-center">
//       {/* border-2 border-neutral-800 */}
//       <div className="w-2/3 px-8 lg:px-24 lg:py-4">
//         <Heading title='Contact Us Now!' />
//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <input
//             onChange={handleChange}
//             type="text"
//             name="name"
//             value={formData.name}
//             placeholder="Your Name"
//             className="rounded-md bg-slate-700 px-4 py-2 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
//           />
//           <input
//             onChange={handleChange}
//             type="email"
//             name="from"
//             value={formData.from}
//             placeholder="Your Email"
//             className="rounded-md bg-slate-700 px-4 py-2 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
//           />
//           <input
//             onChange={handleChange}
//             type="text"
//             name="subject"
//             value={formData.subject}
//             placeholder="subject"
//             className="rounded-md bg-slate-700 px-4 py-2 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
//           />
//           <textarea
//             onChange={handleChange}
//             name="body"
//             value={formData.body}
//             placeholder="Your Message"
//             rows={4}
//             className="rounded-md bg-slate-700 px-4 py-2 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
//           ></textarea>
//           <Button>Submit</Button>
//         </form>
//       </div>

//     </section>
//   );
// };

// export default Contact;
