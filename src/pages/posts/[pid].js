import { useRouter } from 'next/router'
import { Container } from '@mui/material'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query
  const [post, setPost] = useState({ name: "", body: "" });
  useEffect(() => {

    fetch("http://localhost:3000/api/test")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        console.log(post);
      });
  }, [])
  return (
    <><Navbar />
      <main className={styles.mainGrid}>
        <Container className={styles.content}>
          <p>Post: {pid}</p>
          <h1>{post.name}</h1>
          <p>{post.body}</p>
        </Container>

        <Container className={styles.ad}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas officiis nostrum odio. Eveniet, sint saepe. Facilis, cupiditate et a qui autem ab vitae? Temporibus ut quidem ex suscipit eligendi deleniti, consectetur quibusdam ad. Officiis accusantium ipsa earum corporis recusandae sit cum vel rerum. Modi architecto autem vero harum repudiandae omnis. Soluta culpa tenetur reiciendis explicabo doloremque, placeat molestiae libero ipsam optio dignissimos aliquid iste obcaecati dolores animi reprehenderit quam quos sit provident! Ex ea qui recusandae, dignissimos necessitatibus accusantium repellat delecue magni? Tempore qui dolores reiciendis inventore voluptas similique, repellat, molestiae error eveniet expedita, exercitationem consequuntur nulla et optio blanditiis fugiat velit id distinctio sed odio. Corrupti modi saepe dolor, ipsum praesentium voluptate ab! Asperiores atque, repellat dignissimos accusantium quam, dolorem possimus aliquid deserunt culpa voluptatum neque in dolore perferendis rerum illo eaque iste. Tempora deleniti nulla eum laborum consectetur, minima voluptas ullam excepturi eaque suscipit assumenda, delectus atque sequi. Repellendus reprehenderit eos doloremque consectetur suscipit harum reiciendis veritatis. Omnis quibusdam architecto similique nisi.</Container>
      </main>
    </>
  )
}

export default Post