import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Heart, Share2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import guide1 from "@/assets/guide-1.jpg";
import guide2 from "@/assets/guide-2.jpg";
import guide3 from "@/assets/guide-3.jpg";

interface BlogPostData {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: {
    intro: string;
    sections: {
      heading?: string;
      text: string;
      image?: string;
    }[];
  };
  tags: string[];
}

const blogPosts: { [key: string]: BlogPostData } = {
  "whispered-world-motherhood": {
    id: "whispered-world-motherhood",
    title: "The Whispered World: Inside the Raw Sanctuary of New",
    subtitle: "Motherhood",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Motherhood Journey",
    image: guide1,
    content: {
      intro: "Where exhaustion collides with boundless love, and every breath reshapes a young woman's universe.",
      sections: [
        {
          text: "The gentle hum drifts in the first wake of the morning, carried in the soft, hazy light of dawn—and like sleep, usually flavor of 3 a.m. the body, vocal knowing whisper, now feels like a landscape newly discovered as the nighttime. There's the gentleness, and some a few heart-sized tears have spent themselves in the quiet corners of the room, where shadows dance with the first light of day. The whispered world of new motherhood is one that exists between the tangible and the intangible, between the fierce protective energy that's been awakened and the slow of gentle hands, a joy through the nighttime hours, where everything becomes new and fresh, and where the mother and child exist in a sacred space, wrapped in the fragrance of motherhood—a scent that rings ancient but newly."
        },
        {
          image: guide1,
          text: "Emotions swirl like autumn leaves caught in a sudden gust, unpredictable and overwhelming. One moment, she's gazing down at the perfect, sleepy face, the heart swelling with a love so immense she feels like it might crack her rib cage, spilling light into the universe. The next, a wave of anxiety crashes over her—is she breathing? Is she too warm? Is she too cold? The questions pile up like autumn leaves, and she finds herself checking and rechecking, a sentinel guarding the most precious treasure. The love is visceral and primal, a fierce protectiveness that surprises even her. It's a love that transforms, that reshapes not just her daily routine but her very identity. She is no longer just herself; she is a mother, a guardian, and a protector, a sense of being utterly unprepared yet miraculously equipped. The outside world, with its deadlines and demands, feels distant, almost irrelevant, replaced by this new universe of tiny fingers and soft sighs."
        },
        {
          text: "For modern parents navigating the journey of new parenthood, Gentle Care serves as a trusted partner in your baby's well-being. We prioritize transparency with healthcare professionals and parents alike about everything that goes into our products. This gentle formula is specially designed to support your baby's developing digestive system while providing complete nutrition. Our commitment extends beyond just nutrition—we focus on quality, rigorous testing and developmental support. Gentle Care transforms feeding time into a moment of connection, offering you 24-month worry-free peace while ensuring your baby is getting exactly what they need for healthy growth and development."
        },
        {
          image: guide2,
          text: "The rhythmic hum goes in low-decibeled by the baby's innocent, so providential a dance because around she hears raining inspiration feeding sessions, punctuated by the frenetic moments for a clean burp cloth just in time; simple tasks—showering, eating or even meals seem towering a struggle—become monumental victories when she's sleep-deprived. She's not tired; she's bone-deep exhausted, the kind that seeps into her very soul. Yet, in the quiet moments, when the baby is finally asleep and the house is still, she finds herself watching the gentle rise and fall of tiny chest, marveling at the miracle of life. These are the memories become sacred rituals, the quiet thinking that arrives at 3 am, the gentle hum-often lullabies, the careful folding of impossibly small socks. These are the moments that, in their simplicity, hold the most profound meaning."
        },
        {
          text: "The endless procession of her selfless sometimes—the dark circles etched deep beneath her eyes, feet swapping the messy bun, weak legs from carrying a well-determined call it does the third day. It's a strangely bleak, yet undeniably bliss. The smallest young woman who was just weeks ago capable of managing multiple projects, making decisions with confidence, now finds herself questioning the simplest choices. What does that cry mean? Is she hungry? Tired? The outside of sleepless nights and the endless flow of 3 a.m. vulnerable, fiercely powerful metamorphosis. She is learning broken by breath. By day, by navigating this unspoken, demanding, beautiful new world, bringing one that never felt like home again, just finding, in the deepest part of herself, a strength she never knew existed."
        },
        {
          image: guide3,
          text: "In this whispered world of new motherhood, every day brings new discoveries—about her baby, about herself, and about the profound connection that binds them together. It's a journey of transformation, of learning to trust her instincts, and of finding beauty in the chaos. The sleepless nights, the endless feedings, the moments of doubt—they're all part of this sacred passage into motherhood. And in the quiet moments, when the world is still and it's just her and her baby, she realizes that she's exactly where she's meant to be, in this whispered world where love knows no bounds."
        }
      ]
    },
    tags: ["Motherhood", "New Parents", "Baby Care", "Parenting Journey", "Self Care"]
  },
  "first-time-parent-guide": {
    id: "first-time-parent-guide",
    title: "First Time Parent's Complete Guide",
    subtitle: "Everything you need to know about caring for your newborn",
    author: "Dr. Emily Chen",
    date: "March 10, 2024",
    readTime: "12 min read",
    category: "Parenting Guide",
    image: guide2,
    content: {
      intro: "Navigating the first weeks with your newborn can feel overwhelming. This comprehensive guide will help you feel more confident and prepared.",
      sections: [
        {
          text: "Becoming a first-time parent is one of life's most transformative experiences. The moment you hold your baby for the first time, everything changes. Your priorities shift, your heart expands, and suddenly you're responsible for this tiny, perfect human being who depends on you for everything."
        },
        {
          heading: "The First 24 Hours",
          text: "The first day with your newborn is filled with wonder, exhaustion, and a steep learning curve. Your baby will likely sleep a lot, but when they're awake, they'll need frequent feeding. Don't worry if breastfeeding doesn't come naturally at first – it's a skill that both you and your baby need to learn together.",
          image: guide1
        },
        {
          heading: "Feeding Your Newborn",
          text: "Whether you choose to breastfeed or bottle-feed, the most important thing is that your baby is getting proper nutrition. Newborns typically feed every 2-3 hours, including through the night. Watch for hunger cues like rooting, sucking motions, or bringing hands to mouth."
        },
        {
          heading: "Sleep Patterns",
          text: "Newborns sleep 14-17 hours per day, but not all at once. They'll wake frequently for feedings and diaper changes. Remember, your baby's sleep patterns will evolve over the first few months, so be patient with the process.",
          image: guide2
        },
        {
          heading: "Building Confidence",
          text: "Every parent feels overwhelmed at times. Trust your instincts, ask for help when you need it, and remember that there's no such thing as a perfect parent. You're learning and growing alongside your baby, and that's exactly how it should be."
        }
      ]
    },
    tags: ["First Time Parents", "Newborn Care", "Parenting Tips", "Baby Basics"]
  },
  "essential-moves-mom": {
    id: "essential-moves-mom",
    title: "Essential Moves Every Mom Needs",
    subtitle: "Safe and effective exercises for pregnancy and postpartum",
    author: "Lisa Rodriguez, PT",
    date: "March 8, 2024",
    readTime: "10 min read",
    category: "Health & Fitness",
    image: guide3,
    content: {
      intro: "Maintaining physical health during pregnancy and after childbirth is crucial for both mom and baby. Here are the essential exercises every mother should know.",
      sections: [
        {
          text: "Pregnancy and the postpartum period bring significant changes to a woman's body. Staying active during this time can help manage discomfort, prepare for labor, and aid in recovery. However, it's important to choose exercises that are safe and appropriate for each stage of your journey."
        },
        {
          heading: "Prenatal Exercises",
          text: "During pregnancy, focus on exercises that strengthen your core, improve posture, and prepare your body for labor. Pelvic tilts, modified planks, and prenatal yoga are excellent choices. Always consult with your healthcare provider before starting any exercise routine.",
          image: guide1
        },
        {
          heading: "Breathing Techniques",
          text: "Proper breathing is essential during pregnancy and labor. Practice diaphragmatic breathing to help manage stress, improve oxygen flow to your baby, and prepare for the breathing techniques you'll use during labor."
        },
        {
          heading: "Postpartum Recovery",
          text: "After delivery, your body needs time to heal. Start with gentle movements like walking and basic stretches. As you recover, gradually incorporate core strengthening exercises to help restore your abdominal muscles.",
          image: guide2
        },
        {
          heading: "Pelvic Floor Health",
          text: "Pelvic floor exercises are crucial both during pregnancy and after childbirth. These muscles support your pelvic organs and play a key role in core stability. Kegel exercises can help strengthen these important muscles."
        }
      ]
    },
    tags: ["Pregnancy Fitness", "Postpartum Recovery", "Exercise", "Women's Health"]
  }
};

const BlogPost = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const post = blogId ? blogPosts[blogId] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
            <Link to="/home">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/home" className="hover:text-pink-500">Home</Link>
            <span>/</span>
            <span className="text-gray-800">Expert Advice</span>
            <span>/</span>
            <span className="text-gray-800">{post.category}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link to="/home" className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Expert Guides
            </Link>

            {/* Article Title */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                {post.title} <span className="text-pink-500">{post.subtitle}</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {post.content.intro}
              </p>

              {/* Social Actions */}
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Like
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {post.content.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  {section.heading && (
                    <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {section.heading}
                    </h2>
                  )}
                  
                  {section.image && (
                    <div className="my-8">
                      <img 
                        src={section.image} 
                        alt={section.heading || "Blog illustration"}
                        className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                      />
                    </div>
                  )}
                  
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-pink-100 hover:text-pink-700 cursor-pointer transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{post.author}</h4>
                  <p className="text-gray-600 text-sm">
                    Expert contributor to Mama's Compass, specializing in {post.category.toLowerCase()}
                  </p>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Related Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.values(blogPosts)
                  .filter(relatedPost => relatedPost.id !== post.id)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link 
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-4">
                        <span className="text-xs text-pink-600 font-medium">{relatedPost.category}</span>
                        <h4 className="font-semibold text-gray-800 mt-1 group-hover:text-pink-600 transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                          {relatedPost.content.intro}
                        </p>
                        <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                          <span>{relatedPost.date}</span>
                          <span>•</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;