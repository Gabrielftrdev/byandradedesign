@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: 30 14% 4%;
  --foreground: 36 24% 96%;
  --card: 30 14% 6%;
  --card-foreground: 36 24% 96%;
  --popover: 30 14% 6%;
  --popover-foreground: 36 24% 96%;
  --primary: 36 24% 96%;
  --primary-foreground: 30 14% 4%;
  --secondary: 30 14% 12%;
  --secondary-foreground: 36 24% 96%;
  --muted: 30 14% 15%;
  --muted-foreground: 30 10% 60%;
  --accent: 14 65% 62%;
  --accent-foreground: 36 24% 96%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 30 14% 18%;
  --input: 30 14% 18%;
  --ring: 14 65% 62%;
  --radius: 0.5rem;
  
  /* Custom Colors */
  --color-black: #0A0A0A;
  --color-offwhite: #F5F2ED;
  --color-sand: #D4C4B0;
  --color-brown: #8B6F5C;
  --color-orange: #E07A5F;
  --color-wine: #722F37;
  --color-sage: #9CAF88;
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-[#0A0A0A] text-[#F5F2ED];
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
  }
  html {
    scroll-behavior: smooth;
  }
}

/* Custom Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(224, 122, 95, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(224, 122, 95, 0.5);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-slide-in {
  animation: slideIn 0.6s ease-out forwards;
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Stagger delays */
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
.delay-500 { animation-delay: 0.5s; }
.delay-600 { animation-delay: 0.6s; }

/* Hover effects */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Image hover */
.image-zoom {
  overflow: hidden;
}

.image-zoom img {
  transition: transform 0.5s ease;
}

.image-zoom:hover img {
  transform: scale(1.05);
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, #F5F2ED 0%, #D4C4B0 50%, #E07A5F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Glass effect */
.glass {
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #0A0A0A;
}

::-webkit-scrollbar-thumb {
  background: #8B6F5C;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #D4C4B0;
}
