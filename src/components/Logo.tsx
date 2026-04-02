const Logo = ({ className = "h-10" }: { className?: string }) => (
  <div className="flex items-center gap-3">
    <div className={`flex items-center justify-center bg-gradient-to-tr from-primary to-blue-400 text-white rounded-xl ${className} aspect-square shadow-md`}>
      <svg className="w-3/5 h-3/5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z" />
      </svg>
    </div>
    <div className="flex flex-col">
      <span className="font-display font-bold text-xl leading-none tracking-tight text-gray-900">
        Minya<span className="text-primary font-medium">Clinic</span>
      </span>
      <span className="text-[10px] font-medium text-gray-400 tracking-wider uppercase mt-0.5">
        Pediatrics
      </span>
    </div>
  </div>
);

export default Logo;
