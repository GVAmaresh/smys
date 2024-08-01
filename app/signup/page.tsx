export default function Page() {
  let SignUP;
  try {
    SignUP = require("./SignUP").default;
  } catch (e) {
    SignUP = null;
  }

  return (
    <div className="">
      {SignUP ? (
        <SignUP />
      ) : (
        <>
          <div className="bg-black h-screen flex justify-center pt-32">
            <div className="font-medium text-slate-500 text-lg md:text-xl lg:text-2xl">
              <ul className="list-disc pl-5">
                <li className="pb-4">This section is only for developers</li>
                <li className="pb-4">Comment out SignUP.tsx page for signup </li>
                <li className="pb-4">
                  Do not forget to comment out SignUP.tsx page after signup for
                  safety
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
