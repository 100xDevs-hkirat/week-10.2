
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const courses = {
    "courses": [
        {
            "_id": "64ac35fe420a74308d6db047",
            "title": "(Fix THE ISSUE Every user can be admin and add course)",
            "description": "Full stack dev course by harkirat",
            "price": 599999,
            "imageLink": "data:image/jpeg;base64,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",
            "published": true,
            "__v": 0
        },
        {
            "_id": "64afd077657e0e701d309a44",
            "title": "Full stack development new",
            "description": "rat singh",
            "price": 5999,
            "imageLink": "https://d33g7sdvsfd029.cloudfront.net/subject/2023-01-17-0.3698267942851394.jpg",
            "published": true,
            "__v": 0
        },
        {
            "_id": "64b38b1f05d8af81b769d90d",
            "title": "full stack ",
            "description": "full stack course by kirat",
            "price": 599,
            "imageLink": "https://images.pexels.com/photos/17445669/pexels-photo-17445669/free-photo-of-city-landscape-fashion-man.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            "published": true,
            "postedDate": "2023-07-16T06:15:59.466Z",
            "__v": 0
        },
        {
            "_id": "64b4e53e820df2ea9d38aa6a",
            "title": "Html oo yeah",
            "description": "Learn the freaking html",
            "price": 2222,
            "imageLink": "https://th.bing.com/th/id/OIP.PVOhIhZ2cfFJVWI3U9WG6AHaE7?w=234&h=180&c=7&r=0&o=5&pid=1.7",
            "published": true,
            "__v": 0
        },
        {
            "_id": "64b4e739820df2ea9d38aa7f",
            "title": "Html22",
            "description": "Learn the freaking html",
            "price": 222211,
            "imageLink": "https://th.bing.com/th/id/OIP.PVOhIhZ2cfFJVWI3U9WG6AHaE7?w=234&h=180&c=7&r=0&o=5&pid=1.7",
            "published": true,
            "__v": 0
        },
        {
            "_id": "64b500903b9acfe518a51eca",
            "title": "Full Stack MERN",
            "description": "harkirat",
            "price": 5999,
            "imageLink": "https://d33g7sdvsfd029.cloudfront.net/subject/2023-01-17-0.3698267942851394.jpg",
            "published": true,
            "__v": 0
        },
        {
            "_id": "64b5b1cf030c38aba1d47ed1",
            "title": "testAdmin",
            "description": "test",
            "price": 25,
            "imageLink": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "published": true,
            "__v": 0
        }
    ]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(courses)
}
