import Link from "next/link";
import React from "react";
import moment from "moment";

const PostCard = ({ post }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
        />
      </div>
      <h1
        className='transition duration-700 text-center mb-8 cursor-pointer
       hover:text-pink-600 text-3xl font-semibold'
      >
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            height='30px'
            width='30px'
            className='align-middle rounded-full'
          />
          <p className='inline align-middle text-gray-700 ml-2 text-lg'>
            {post.author.name}
          </p>
        </div>
        <div className='font-medium  flex items-center justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-pink-600 inline mr-3'
          >
            <path d='M21,2H18V0H16V2H8V0H6V2H3A3,3,0,0,0,0,5V24H24V5A3,3,0,0,0,21,2ZM2,5A1,1,0,0,1,3,4H21a1,1,0,0,1,1,1V8H2ZM2,22V10H22V22Z' />
            <rect x='15' y='13' width='2' height='2' />
            <rect x='11' y='13' width='2' height='2' />
            <rect x='7' y='13' width='2' height='2' />
            <rect x='15' y='17' width='2' height='2' />
            <rect x='11' y='17' width='2' height='2' />
            <rect x='7' y='17' width='2' height='2' />
          </svg>
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>
        {post.exceprt}
      </p>
      <div className='text-center'>
        <Link href={`/post/${post.slug}`}>
          <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
