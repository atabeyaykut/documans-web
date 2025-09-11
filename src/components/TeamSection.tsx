export default function TeamSection() {
  const teamMembers = [
    {
      name: "Lorem Ipsum",
      position: "Dolor Sit Amet",
      image: "https://picsum.photos/300/300?random=1",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lorem@ipsum.com"
      }
    },
    {
      name: "Consectetur Adipiscing",
      position: "Elit Sed",
      image: "https://picsum.photos/300/300?random=2",
      bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "consectetur@ipsum.com"
      }
    },
    {
      name: "Tempor Incididunt",
      position: "Ut Labore",
      image: "https://picsum.photos/300/300?random=3",
      bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "tempor@ipsum.com"
      }
    },
    {
      name: "Magna Aliqua",
      position: "Minim Veniam",
      image: "https://picsum.photos/300/300?random=4",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "magna@ipsum.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lorem <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Ipsum</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 text-center transition-all duration-300 hover:shadow-xl">
                {/* Profile Image */}
                <div className="relative mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Member Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-6">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.337 7.433c-1.144 0-2.069-.927-2.069-2.07 0-1.144.925-2.07 2.069-2.07 1.144 0 2.07.926 2.07 2.07 0 1.143-.926 2.07-2.07 2.07zM6.814 20.452H3.861V9h2.953v11.452z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Lorem Ipsum Dolor?</h3>
            <p className="text-gray-600 mb-6">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.</p>
            <a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Open Positions
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
