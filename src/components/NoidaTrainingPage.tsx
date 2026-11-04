
interface NoidaTrainingPageProps {
    onEnquireClick: () => void;
  }
  
  export function NoidaTrainingPage({
    onEnquireClick,
  }: NoidaTrainingPageProps) {
    return (
      <>
        {/* Noida SEO Landing Page */}
        <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-3xl">
              <p className="text-blue-200 font-semibold tracking-wider uppercase text-sm mb-4">
                HireNest | Noida, Uttar Pradesh
              </p>
  
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                IT Training in Noida to Build Your Career
              </h1>
  
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8">
                Develop practical skills with HireNest. Explore IT training,
                digital marketing, project-based learning and professional
                skill development to prepare for your career.
              </p>
  
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={onEnquireClick}
                  className="bg-white text-blue-900 px-7 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition"
                >
                  Enquire Now
                </button>
  
                <a
                  href="#noida-courses"
                  className="border border-white/50 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-white/10 transition"
                >
                  Explore Training
                </a>
              </div>
            </div>
          </div>
        </section>
  
        {/* Introduction */}
        <section className="py-16 md:py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-blue-700 font-semibold uppercase tracking-wider text-sm mb-3">
              About Our Training
            </p>
  
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Practical IT and Professional Training in Noida
            </h2>
  
            <div className="space-y-4 text-slate-600 leading-8 text-lg">
              <p>
                HireNest focuses on practical learning, professional skill
                development and career preparation. Our training approach
                emphasizes understanding concepts and applying knowledge
                through practical activities and projects.
              </p>
  
              <p>
                If you are a student, fresher or working professional looking
                to develop new skills, explore the training programs offered
                by HireNest and find a learning path that matches your goals.
              </p>
  
              <p>
                Based in Noida, Uttar Pradesh, HireNest aims to support
                learners in Noida and nearby areas such as Greater Noida,
                Ghaziabad and Delhi NCR.
              </p>
            </div>
          </div>
        </section>
  
        {/* Training Areas */}
        <section id="noida-courses" className="bg-slate-50 py-16 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-blue-700 font-semibold uppercase tracking-wider text-sm mb-3">
                Explore Learning Opportunities
              </p>
  
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Training Programs at HireNest
              </h2>
  
              <p className="text-slate-600 leading-7">
                Explore skill development and career-focused learning
                opportunities. Contact our team for current program details.
              </p>
            </div>
  
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200">
                <div className="text-3xl mb-4">💻</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  IT Training
                </h3>
                <p className="text-slate-600 leading-7">
                  Build your technical knowledge and develop practical
                  skills relevant to your learning and career goals.
                </p>
              </div>
  
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Digital Marketing
                </h3>
                <p className="text-slate-600 leading-7">
                  Learn about digital marketing concepts, online promotion
                  and skills used in the digital industry.
                </p>
              </div>
  
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Career Development
                </h3>
                <p className="text-slate-600 leading-7">
                  Improve professional skills and prepare for your next
                  career step through guided learning.
                </p>
              </div>
            </div>
  
            <div className="text-center mt-10">
              <button
                onClick={onEnquireClick}
                className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition"
              >
                Ask About Training Programs
              </button>
            </div>
          </div>
        </section>
  
        {/* Why HireNest */}
        <section className="py-16 md:py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Why Explore HireNest Training in Noida?
            </h2>
  
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                'Practical and project-focused learning approach',
                'Professional skill development',
                'Career preparation and guidance',
                'Learning options based on program availability',
                'Training enquiry and program guidance',
                'Noida-based business presence',
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-slate-50 p-5 rounded-xl"
                >
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <p className="text-slate-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Location */}
        <section className="bg-blue-50 py-14 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              HireNest – Noida, Uttar Pradesh
            </h2>
  
            <p className="text-slate-600 text-lg leading-8 mb-6">
              HireNest is based in Noida, Uttar Pradesh. Contact our team
              to learn about available training programs, learning modes
              and enrolment information.
            </p>
  
            <p className="text-slate-700 font-semibold">
              Email: contact@hirenext.careers
            </p>
  
            <p className="text-slate-700 font-semibold mt-2">
              Phone: +91 8860670794
            </p>
          </div>
        </section>
  
        {/* FAQs */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
  
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  1. Does HireNest provide IT training in Noida?
                </h3>
                <p className="text-slate-600 leading-7">
                  HireNest offers IT training and professional skill
                  development programs. Contact the team for current
                  course availability and details.
                </p>
              </div>
  
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  2. Which training programs can I enquire about?
                </h3>
                <p className="text-slate-600 leading-7">
                  You can enquire about IT training, digital marketing
                  and career development programs offered by HireNest.
                </p>
              </div>
  
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  3. Where is HireNest located?
                </h3>
                <p className="text-slate-600 leading-7">
                  HireNest is based in Noida, Uttar Pradesh, India.
                </p>
              </div>
  
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  4. How can I get course details?
                </h3>
                <p className="text-slate-600 leading-7">
                  You can contact HireNest by phone or email to ask about
                  available programs, learning modes and enrolment.
                </p>
              </div>
            </div>
  
            <div className="text-center mt-10">
              <button
                onClick={onEnquireClick}
                className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition"
              >
                Contact HireNest
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
  