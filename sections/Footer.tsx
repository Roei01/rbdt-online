export const Footer = () => {
  return (
    <footer className="py-12 bg-slate-50 text-slate-900 text-center border-t border-slate-200 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-left">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-rose-500 mb-2">Dance Skill</h3>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
        
        <div className="flex gap-6">
          {['Instagram', 'YouTube', 'Contact'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium tracking-wide uppercase hover:underline decoration-orange-500 decoration-2 underline-offset-4"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
