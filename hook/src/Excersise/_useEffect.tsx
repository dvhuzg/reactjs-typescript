//useEffect dung de change DOM, call API
//useEffect se uu tien render du lieu nguoi dung truoc, roi moi thuc hien ham callback, code van doc tu tren xuong nhung thang useEffect se ngam callback lai doi khi nao ham return chay xong thi no moi chay

import { useEffect, useState } from "react";


interface obj {
  post: {
    userId: number;
    id: number;
    title: string;
    name: string;
  }[];
}
const tabs = ["posts", "comments", "albums"];

const _useEffect = () => {
  const [title, setTitle] = useState<string>("");
  const [posts, setPosts] = useState<obj["post"]>([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    document.title = title;
  });

  //----------------------------------------------------
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  //   ----------------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    //clean up : don dep nhung thu con lai trong bo nho khi da unmount component
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   ----------------------------------------------
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //-------------------timer---------------------------------
  const [countdown, setCountdown] = useState(180);
  useEffect(() => {
    setInterval(() => {
      setCountdown((prevState) => prevState - 1);
    }, 1000);
  }, []);

  return (
    <div>
      {tabs.map((tab) => {
        return (
          <button
            key={tab}
            style={
              type === tab ? { color: "#fff", backgroundColor: "#000" } : {}
            }
            onClick={() => setType(tab)}>
            {tab}
          </button>
        );
      })}
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setTitle(e.target.value)}
      />
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title || post.name}</li>;
        })}
      </ul>
      {showGoToTop && (
        <button style={{ position: "fixed", right: "20px", bottom: "30px" }}>
          Go to Top
        </button>
      )}

      <h1>Screen width: {screenSize}</h1>

      <h1>Countdown machine: {countdown}</h1>
    </div>
  );
};

export default _useEffect;
