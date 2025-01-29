import React from 'react';
import { 
  Facebook, 
  Instagram, 
  MessageCircle, 
  ShoppingBag, 
  Store,
  Video,
  Youtube,
  Sparkles,
  Star,
  ShoppingCart
} from 'lucide-react';

function App() {
  const whatsappNumber = "+923124107512";
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')] bg-cover bg-center opacity-5"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 animate-float-slow">
            <Sparkles className="w-6 h-6 text-purple-400 opacity-50" />
          </div>
          <div className="absolute top-20 right-20 animate-float-delayed">
            <Star className="w-4 h-4 text-pink-400 opacity-50" />
          </div>
          <div className="absolute bottom-20 left-1/4 animate-float">
            <ShoppingCart className="w-5 h-5 text-violet-400 opacity-50" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Logo Container with Business Name */}
            <div className="flex flex-col items-center space-y-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 opacity-75"></div>
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center border-4 border-white border-opacity-20 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                  {/* Replacing Store icon with the provided image */}
                  <img 
                    src="https://scontent.fskt5-1.fna.fbcdn.net/v/t39.30808-6/474774401_122102678642738999_4754593664870293401_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=swKHz0TV3iIQ7kNvgHHbKru&_nc_zt=23&_nc_ht=scontent.fskt5-1.fna&_nc_gid=AUA1vqAE-qeMyleDzgp81PJ&oh=00_AYA69wZ7veEwUl9V1Rsu7YQzbjxdKup5DwZeZse8xC778w&oe=67A03010" 
                    alt="Business Logo" 
                    className="w-28 h-28 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              {/* Enhanced Business Name under Logo */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 blur-xl opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
                <h2 className="relative text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-400 to-purple-300 bg-size-200 animate-gradient-x transform hover:scale-105 transition-all duration-300 [text-shadow:_0_4px_12px_rgb(255_255_255_/_20%)]">
                  Mini Sale Point
                </h2>
              </div>
            </div>

            {/* Title with enhanced animation and effects */}
            <div className="relative mt-12">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="inline-block animate-title-slide-up opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
                  <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-size-200 animate-gradient-x">
                    Mini
                  </span>
                </span>
                <span className="inline-block animate-title-slide-up opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
                  <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400 bg-size-200 animate-gradient-x px-2">
                    Sale
                  </span>
                </span>
                <span className="inline-block animate-title-slide-up opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
                  <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-size-200 animate-gradient-x">
                    Point
                  </span>
                </span>
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur-lg opacity-20"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl animate-fade-in opacity-100 [animation-delay:0.8s] [animation-fill-mode:forwards]">
              Your one-stop destination for quality products at competitive prices
            </p>

            <div className="animate-bounce-slow">
              <ShoppingBag className="w-12 h-12 text-purple-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="py-20 bg-black bg-opacity-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Connect With Us
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <Facebook className="w-8 h-8" />, name: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61572169993093', color: 'hover:text-blue-500' },
              { icon: <Instagram className="w-8 h-8" />, name: 'Instagram', link: 'https://www.instagram.com/minisalepoint', color: 'hover:text-pink-500' },
              { icon: <MessageCircle className="w-8 h-8" />, name: 'WhatsApp', link: 'https://api.whatsapp.com/send?phone=923124107512', color: 'hover:text-green-500' },
              { icon: <Video className="w-8 h-8" />, name: 'TikTok', link: 'https://www.tiktok.com/@minisalepoint', color: 'hover:text-purple-500' },
              { icon: <Youtube className="w-8 h-8" />, name: 'YouTube', link: 'https://www.youtube.com/@MiniSalePoint-ot5lr', color: 'hover:text-red-500' },
              { icon: <Youtube className="w-8 h-8" />, name: 'SnackVideo', link: 'https://www.snackvideo.com/@Minisalepoint', color: 'hover:text-red-500' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className={`transform hover:scale-110 transition-all duration-300 ${social.color}`}
              >
                <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white bg-opacity-5 backdrop-blur-lg hover:bg-opacity-10">
                  {social.icon}
                  <span className="text-sm">{social.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <div className="space-y-6">
              <button
                onClick={handleWhatsAppClick}
                className="w-full py-4 px-6 bg-green-500 hover:bg-green-600 rounded-lg flex items-center justify-center space-x-3 transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
