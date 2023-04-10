import { useRouter } from "next/router"

function BlogDetails() {
    const router = useRouter();
    const blogId = router.query.blogId;

    console.log(blogId)


    return (
        <div>This id: {blogId} blog details </div>
    )
}

export default BlogDetails