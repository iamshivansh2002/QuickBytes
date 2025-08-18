


// import { useState } from 'react';

// const Section = ({ title, discription, isVisible, onShow }) => {
//   return (
//     <div className="border border-black p-2 m-2">
//       <h3 className="font-bold">{title}</h3>
//       {isVisible ? (
//         <button onClick={() => onShow(null)} className="cursor-pointer underline">
//           hide
//         </button>
//       ) : (
//         <button onClick={onShow} className="cursor-pointer underline">
//           show
//         </button>
//       )}
//       {isVisible && <p>{discription}</p>}
//     </div>
//   );
// };

// const Instamart = () => {
//   const [visibleSection, setVisibleSection] = useState("team");

//   return (
//     <div>
//       <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>

//       <Section
//         title="About instamart"
//         discription="this is all about quickbytes..."
//         isVisible={visibleSection === "about"}
//         onShow={() => setVisibleSection(visibleSection === "about" ? null : "about")}
//       />

//       <Section
//         title="About team"
//         discription="this is all about team members..."
//         isVisible={visibleSection === "team"}
//         onShow={() => setVisibleSection(visibleSection === "team" ? null : "team")}
//       />

//       <Section
//         title="About career"
//         discription="this is all about careers..."
//         isVisible={visibleSection === "career"}
//         onShow={() => setVisibleSection(visibleSection === "career" ? null : "career")}
//       />
//     </div>
//   );
// };

// export default Instamart;





import { useState } from 'react';

// Section component: receives props from parent
// Displays title, description and show/hide logic controlled by parent
const Section = ({ title, discription, isVisible, onShow }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold">{title}</h3>

      {/* Show or hide button based on visibility */}
      {isVisible ? (
        <button onClick={() => onShow(null)} className="cursor-pointer underline">
          hide
        </button>
      ) : (
        <button onClick={onShow} className="cursor-pointer underline">
          show
        </button>
      )}

      {/* Show description only if section is visible */}
      {isVisible && <p>{discription}</p>}
    </div>
  );
};

// Instamart is the parent component
// Holds the state and passes it to each Section
// This is an example of lifting state up
const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("team"); // lifted state

  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>

      {/* Section 1: About Instamart */}
      <Section
        title="About instamart"
        discription="this is all about quickbytes..."
        isVisible={visibleSection === "about"}
        onShow={() => setVisibleSection(visibleSection === "about" ? null : "about")}
      />

      {/* Section 2: About Team */}
      <Section
        title="About team"
        discription="this is all about team members..."
        isVisible={visibleSection === "team"}
        onShow={() => setVisibleSection(visibleSection === "team" ? null : "team")}
      />

      {/* Section 3: About Career */}
      <Section
        title="About career"
        discription="this is all about careers..."
        isVisible={visibleSection === "career"}
        onShow={() => setVisibleSection(visibleSection === "career" ? null : "career")}
      />
    </div>
  );
};

export default Instamart;


