import { useEffect, useState } from "react";

function useFetch(ufpage = 1) {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(1);

  const fetchJobs = async (page = ufpage) => {
    let url = `https://apna.co/_next/data/NiSmUuGc6W4D-BD7sn9sQ/jobs.json?department_id=38&page=${page}`;

    let options = { method: "GET" };
    try {
      let response = await fetch(url, options);
      if (response.status == 200) {
        response = await response.json();
        console.log("Response ===> ", response);
        setJobs(jobs.concat(response.pageProps?.jobs));
        setIsLoading(0);
      } else {
        alert("There is an Error");
        setIsLoading(2);
      }
    } catch (error) {
      alert("There is an Error");
      setIsLoading(2);
      console.error(`Errror in Fetch ==> `, error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  function reFetch(page = 1) {
    setIsLoading(1);
    fetchJobs(page);
  }
  return { jobs, isLoading, reFetch };
}

export default useFetch;
