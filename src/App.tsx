
import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrainingPrograms } from './components/TrainingPrograms';
import { LearningModes } from './components/LearningModes';
import { LearningPathway } from './components/LearningPathway';
import { StudentSuccess } from './components/StudentSuccess';
import { TrustTransparency } from './components/TrustTransparency';
import { CareerPreparation } from './components/CareerPreparation';
import { StudentEnquiry, StudentEnquiryHandle } from './components/StudentEnquiry';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ProgramDetailPage } from './components/ProgramDetailPage';
import { WhatsAppButton } from './components/WhatsAppButton';
import { NoidaTrainingPage } from './components/NoidaTrainingPage';
import { StudentStory, DEFAULT_STUDENT_STORIES } from './utils/studentStories';

const SITE_URL = 'https://www.hirenestsolution.com';

export default function App() {
  const enquiryRef = useRef<StudentEnquiryHandle>(null);

  const [stories, setStories] = useState<StudentStory[]>(DEFAULT_STUDENT_STORIES);
  const [viewingProgramId, setViewingProgramId] = useState<string | null>(null);

  const [isNoidaPage, setIsNoidaPage] = useState(
    window.location.pathname.replace(/\/$/, '') === '/it-training-in-noida'
  );

  // Handle page navigation
  useEffect(() => {
    const handleLocationChange = () => {
      setIsNoidaPage(
        window.location.pathname.replace(/\/$/, '') === '/it-training-in-noida'
      );
    };

    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // SEO metadata
  useEffect(() => {
    const isNoida = window.location.pathname.replace(/\/$/, '') === '/it-training-in-noida';

    document.title = isNoida
      ? 'IT Training in Noida | HireNest - Career Development'
      : 'HireNest | IT Training & Career Development Across India';

    const description = isNoida
      ? 'Explore IT training, digital marketing and professional skill development in Noida with HireNest. Contact us for training program details.'
      : 'Build your career with HireNest. Explore practical IT training, digital marketing, professional skill development and career guidance.';

    let metaDescription = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;

    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    canonical.href = isNoida
      ? `${SITE_URL}/it-training-in-noida`
      : `${SITE_URL}/`;
  }, [isNoidaPage]);

  // Existing program detail hash handling
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;

      if (hash.startsWith('#program/')) {
        const id = hash.replace('#program/', '');
        setViewingProgramId(id);
      } else if (hash === '#programs-catalog') {
        setViewingProgramId('digital-marketing');
      } else {
        setViewingProgramId(null);
      }
    };

    handleHash();

    window.addEventListener('hashchange', handleHash);

    return () => {
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  const scrollToEnquiry = () => {
    setTimeout(() => {
      const el = document.getElementById('enquiry');

      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });

        setTimeout(() => {
          enquiryRef.current?.focusForm();
        }, 500);
      }
    }, 50);
  };

  const handleSelectProgram = (programName: string) => {
    setViewingProgramId(null);

    setTimeout(() => {
      enquiryRef.current?.setProgram(programName);
      scrollToEnquiry();
    }, 50);
  };

  const handleSelectMode = (mode: 'Online' | 'Offline') => {
    enquiryRef.current?.setMode(mode);
    scrollToEnquiry();
  };

  const handleViewProgramDetails = (programId: string) => {
    setViewingProgramId(programId);
    window.location.hash = `program/${programId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setViewingProgramId(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddStory = (newStory: StudentStory) => {
    setStories((prev) => [newStory, ...prev]);
  };

  const handleToggleStatus = (id: string) => {
    setStories((prev) =>
      prev.map((story) => {
        if (story.id !== id) return story;

        const willPublish = story.status !== 'published';

        return {
          ...story,
          status: willPublish ? 'published' : 'draft',
          verified: willPublish ? true : story.verified,
        };
      })
    );
  };

  const handleResetStories = () => {
    setStories([]);
  };

  const handleLoadSampleVerifiedStory = () => {
    setStories(DEFAULT_STUDENT_STORIES);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      <Navbar
        onEnquireClick={scrollToEnquiry}
        onProgramsClick={() => {
          if (viewingProgramId) {
            setViewingProgramId(null);

            setTimeout(() => {
              document.getElementById('programs')?.scrollIntoView({
                behavior: 'smooth',
              });
            }, 50);
          }
        }}
      />

      <main className="flex-1">
        {isNoidaPage ? (
          <>
            <NoidaTrainingPage onEnquireClick={scrollToEnquiry} />

            <div id="enquiry" className="py-10">
              <StudentEnquiry ref={enquiryRef} />
            </div>
          </>
        ) : viewingProgramId ? (
          <ProgramDetailPage
            initialProgramId={viewingProgramId}
            onBackToHome={handleBackToHome}
            onEnquireProgram={handleSelectProgram}
          />
        ) : (
          <>
            <Hero
              onExploreClick={() => {
                document.getElementById('programs')?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
              onTalkToUsClick={scrollToEnquiry}
            />

            <TrainingPrograms
              onSelectProgram={handleSelectProgram}
              onGetGuidance={scrollToEnquiry}
              onViewProgramDetails={handleViewProgramDetails}
            />

            <LearningModes onSelectMode={handleSelectMode} />

            <LearningPathway />

            <StudentSuccess
              stories={stories}
              onAddStory={handleAddStory}
              onToggleStatus={handleToggleStatus}
              onResetStories={handleResetStories}
              onLoadSampleVerifiedStory={handleLoadSampleVerifiedStory}
            />

            <TrustTransparency onAskQuestion={scrollToEnquiry} />

            <CareerPreparation />

            <StudentEnquiry ref={enquiryRef} />

            <FaqSection />
          </>
        )}
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}
