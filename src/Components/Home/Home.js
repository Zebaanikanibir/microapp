import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import { Spinner, Container, Navbar } from 'react-bootstrap';
const PAGE = 1;
const Home = () => {
  const [questions, setQuestions] = useState([])
  const [page, setPage] = useState(PAGE)



  useEffect(() => {

    fetch(`https://api.stackexchange.com/2.2/search/advanced?page=${page}&pagesize=20&o%20rder=desc&sort=activity&site=stackoverflow`)
      .then(res => res.json())
      .then(data => setQuestions(data.items))


  }, [page])
  console.log('ques', questions)
  const scrollToEnd = () => {

    setPage(page + 1)
  }

  window.onscroll = function () {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      scrollToEnd()
    }
  }
  return (
    <div>
      
        <Navbar expand="lg" variant="light"className="Nvbar">
          <h2 className="brand">Questions Library📰</h2>
        </Navbar>
      
      {
        questions.length === 0 && (
          <div id="loading" className="App mt-5">
            <Spinner animation="border" variant="warning" />
          </div>
        )
      }
      <table className="table mt-5" >
        <thead>
          <tr className="title">
            <th scope="col">Author</th>
            <th scope="col">Title</th>
            <th scope="col">Creation Date</th>

          </tr>
        </thead>
        <tbody>
          {

            questions.map(ques => <Details ques={ques} key={ques.question_id}></Details>)
          }
        </tbody>
      </table>


    </div>
  );
}

export default Home;
