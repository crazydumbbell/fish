const Home = () => {
  let name = "park";
  let age = 20;
  let link = "http://google.com";

  return (
    <div className="bg-slate-300 h-screen w-screen flex flex-col items-center justify-center">
      <h4 className="title flex justify-center text-white bg-red-100 text-[30px]">
        애플후레시 {age}
      </h4>
      <p className="title-sub text-white">by dev {name}</p>
      <a className="text-red-100" href={link}>
        링크
      </a>
    </div>
  );
};
export default Home;
