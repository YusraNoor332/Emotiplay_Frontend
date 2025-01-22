import React from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LiaLinkedin } from "react-icons/lia";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const teamMembers = [
  {
    name: "Faraz Ahmad",
    role: "Full Stack Developer",
    image: "/placeholder.svg?height=300&width=300&text=Faraz+Ahmad",
    bio: "Faraz is a passionate Full Stack Developer with expertise in both frontend and backend technologies. His vision and technical skills were instrumental in bringing Emotiplay to life.",
    github: "https://github.com/farazahmad",
    linkedin: "https://linkedin.com/in/farazahmad",
    email: "faraz@emotiplay.com",
  },
  {
    name: "Yusra Noor",
    role: "Backend Developer",
    image: "/placeholder.svg?height=300&width=300&text=Yusra+Noor",
    bio: "Yusra is a skilled Backend Developer who specializes in creating robust and scalable server-side applications. Her expertise was crucial in developing Emotiplay's powerful backend infrastructure.",
    github: "https://github.com/yusranoor",
    linkedin: "https://linkedin.com/in/yusranoor",
    email: "yusra@emotiplay.com",
  },
];

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
          About Emotiplay
        </h1>

        <div className="text-center mb-12">
          <p className="text-xl text-gray-700 mb-4">
            Emotiplay is a revolutionary platform that connects your emotions
            with personalized video content. Our mission is to enhance your
            viewing experience by understanding and responding to your mood.
          </p>
          <p className="text-xl text-gray-700">
            Founded by two passionate developers, Emotiplay is the result of
            innovative thinking and cutting-edge technology. Still It will be an 
            open source project any one with the capability to rotate his/her fingers over 
            the keyboard is going to be our future teammate!
          </p>
        </div>

        <h2 className="text-3xl font-semibold text-center text-purple-700 mb-8">
          Meet Our Team
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-purple-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 mb-4">{member.role}</p>
                <p className="text-gray-700 mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <GitHubLogoIcon className="h-6 w-6 text-gray-600 hover:text-purple-600" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <LiaLinkedin className="h-6 w-6 text-gray-600 hover:text-purple-600" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-6 w-6 text-gray-600 hover:text-purple-600" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-semibold text-purple-800 mb-4">
            Our Collaboration
          </h2>
          <p className="text-gray-700 mb-4">
            Faraz and Yusra joined forces to create Emotiplay, combining their
            unique skills and shared passion for innovative technology. Faraz's
            full-stack expertise and Yusra's backend proficiency allowed them to
            develop a seamless, user-friendly platform with a robust
            infrastructure.
          </p>
          <p className="text-gray-700">
            Their collaborative effort has resulted in a unique product that
            stands at the intersection of emotion recognition and content
            curation, offering users a personalized and engaging video
            experience like never before.
          </p>
        </div>

        <div className="bg-purple-100 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-purple-800 mb-4">
            Future Plans
          </h2>
          <p className="text-gray-700 mb-6">
            We're excited to announce that Emotiplay will soon be open-sourced!
            Our vision is to create a community-driven platform where developers
            from around the world can contribute, improve, and expand upon our
            initial work.
          </p>
          <p className="text-gray-700 mb-6">
            By open-sourcing Emotiplay, we aim to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Foster innovation in emotion-based content curation</li>
            <li>Improve the platform's features and capabilities</li>
            <li>
              Enhance security and performance through community contributions
            </li>
            <li>Create opportunities for developers to learn and grow</li>
          </ul>
          <p className="text-gray-700 mb-8">
            Stay tuned for our official open-source announcement. We can't wait
            to see how the developer community will help shape the future of
            Emotiplay!
          </p>
          <div className="text-center">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Join Our Community
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
