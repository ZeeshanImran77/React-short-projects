import { useState } from "react";

export default function GithubProfileFinder() {
  const [searchProfile, setSearchProfile] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchUserData(user) {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${user}`);
      const data = await res.json();
      setUserInfo(data);
      setLoading(false);
      console.log(data);
      setSearchProfile("");
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  return (
    <>
      <h2 className="text-center font-bold text-4xl mb-8">
        Github Profile Finder
      </h2>
      <div className="max-w-3xl m-auto flex gap-2 mb-6">
        <input
          className="border rounded-lg px-3 flex-1"
          type="text"
          placeholder="Search Profile..."
          value={searchProfile}
          onChange={(e) => setSearchProfile(e.target.value)}
        />
        <button
          onClick={() => fetchUserData(searchProfile)}
          className="text-white font-bold text-xl py-3 px-7 rounded-lg bg-black cursor-pointer hover:bg-orange-500"
        >
          Search
        </button>
      </div>
      {userInfo && userInfo.login ? (
        <div className="max-w-4xl mx-auto bg-gray-200 rounded-2xl flex items-start gap-8 p-8">
          <img
            className="rounded-full w-3xs h-3xs"
            src={userInfo.avatar_url}
            alt=""
          />
          <div className="rounded-xl p-8 flex-1">
            <div className="flex justify-between items-baseline">
              <h3 className="text-2xl font-bold">{userInfo.login}</h3>
              <p className="font-bold">followers : {userInfo.followers}</p>
            </div>
            <div className="flex items-baseline justify-between">
              <a
                className="font-bold underline hover:text-blue-400"
                href={userInfo.html_url}
              >
                Github Profile
              </a>
              <p className="font-bold">
                Public Repos : {userInfo.public_repos}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-3xl text-red-500 text-center capitalize max-w-4xl mx-auto">
          data not found
        </div>
      )}
    </>
  );
}
