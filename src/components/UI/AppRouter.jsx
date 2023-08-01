import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import NotFound from "../../pages/NotFound";
import PostIdPages from '../../pages/PostIdPage';

const AppRouter = () => {
    return (
        <Routes>
          <Route path="/about" element={<About />} />
          <Route exact path="/" element={<Posts />} />
          <Route exact path="/posts" element={<Posts />} />
          <Route exact path="/posts/:id" element={<PostIdPages />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
    );
};

export default AppRouter;