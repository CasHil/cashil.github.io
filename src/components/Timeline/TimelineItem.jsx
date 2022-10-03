import Heading from "../Heading/Heading";

export default function TimelineItem({ data }) {
  return (
    <>
      <div className="bg-white p-5 my-5 shadow-xl shadow-black">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-4/5 pr-2">
            <Heading size="h2" title={data.title} color="black"></Heading>
            <Heading size="h3" title={data.subtitle} color="black"></Heading>
            <span className="text-black">
              {data.startDate} - {data.endDate}
            </span>
          </div>

          <div className="w-1/2">
            <img
              src={`${process.env.PUBLIC_URL}/images/${data.image.uri}`}
              alt={data.image.alt}
              className="w-20 h-20 hidden lg:block float-right"
            />
          </div>
        </div>
        {data.text && <p className="text-black">{data.text}</p>}
      </div>
    </>
  );
}
