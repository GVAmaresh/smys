


export default function Page() {
    let SignUP;
    try {
      SignUP = require('./SignUP').default;
    } catch (e) {
      SignUP = null;
    }
  
    return (
      <div className="bg-black h-screen">
        {SignUP ? (
          <SignUP />
        ) : (
          <div className="pt-32 font-extrabold text-slate-500 text-center text-xl md:text-3xl">
            This section is only for developers
          </div>
        )}
      </div>
    );
  }