import Heading from "../Font/Heading";

export default function ProgramTemplate() {
  return (
    <>
      <Heading text="Programs" />
      <div
        className="m-10 md:m-64 md:mt-10 md:mb-10 p-10 mt-10 mb-10 border-2"
        style={{
          borderBottomRightRadius: "50px",
          borderTopLeftRadius: "50px",
          textAlign: "justify",
        }}
      >
        <li>
          <span className=" font-extrabold text-lg">Annapoorna Nidhi: </span>This
          fund aims to gather funds to provide nutritious meals to students.
        </li>
        <br />
        <li>
          <span className=" font-extrabold text-lg">
            Scholarship Fund:{" "}
          </span>
          This provides financial assistance for students in need.
        </li>
        <br />
        <li>
          <span className=" font-extrabold text-lg">Building Fund: </span>
          Contributions to the Building Fund are utilised to improve building
          infrastructure requirements.
        </li>
        <br />
        <li>
          <span className=" font-extrabold text-lg">
            Special Meal Sponsorship:
          </span>
          This sponsorship ensures that students receive special meals on
          specific occasions like festivals, donors birthday or special events.
        </li>
        <br />
        <li>
          <span className=" font-extrabold text-lg">Library Fund:</span>
          Donations to the Library Fund are utilized to procure new books,
          educational materials, and resources for the hostel library.
        </li>
        <br /> 
        <li>
          <span className=" font-extrabold text-lg">Other Donations: </span>This
          category allows donors to contribute towards specific needs or
          purposes within the institution, such as equipment, extracurricular
          activities and others.
        </li>
        <br />

        <span className=" font-extrabold text-lg">
          The total amount donated is specifically allocated based on the
          intentions specified by the donors.
        </span>
      </div>
    </>
  );
}
