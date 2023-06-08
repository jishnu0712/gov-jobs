import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import styles from '@/styles/Home.module.css'
import { Container } from '@mui/material'


import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>West Bengal Job Hunt</title>
        <meta name="description" content="Search Government Jobs in West Bengal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.mainGrid}>
        <Container className={styles.content}>
          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, aut!</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis saepe ullam porro quaerat, deserunt consectetur quia consequuntur fuga doloribus odit quisquam obcaecati natus eum! Optio minima nam ut, minus et officia quaerat ullam accusamus, pariatur corporis qui ipsam quisquam totam cupiditate dolorum quo. Sed dignissimos voluptate illum possimus pariatur? Libero rerum deserunt, unde voluptates architecto molestias reiciendis itaque fugiat quae incidunt eius quos earum similique, aspernatur illum vitae delectus necessitatibus qui nisi voluptatem laboriosam deleniti aut? Animi aut ducimus nam debitis, quis sequi ratione fugiat doloribus et voluptatem quod dolorum facere ipsam laborum qui expedita asperiores porro nesciunt molestiae saepe? Asperiores alias obcaecati architecto. Autem, fugit iusto! At nihil, tempora quam labore saepe minus id maxime doloremque soluta non corporis nobis neque blanditiis natus a asperiores iure porro ab culpa facilis consequatur possimus placeat! Laboriosam rerum ipsum ratione illum repellendus sequi eum non similique porro velit consequatur repellat neque veniam dolor quia sit, deserunt explicabo id enim blanditiis facilis at necessitatibus quis. Consectetur molestiae sed praesentium enim maxime dolores amet voluptas iste magni cum. Ipsa suscipit nostrum eveniet similique facere id. Facilis debitis aut, animi perferendis, dolorem aspernatur quidem necessitatibus nisi repellat voluptatum deleniti minus expedita illo et facere commodi. Atque, error? Ipsa earum optio nemo numquam est vitae officia quidem ut, incidunt consequuntur laudantium magnam dicta praesentium, rem eius natus delectus minima eos? At possimus soluta ad ut voluptatibus veniam provident accusamus repellat excepturi est. Hic itaque tenetur quibusdam nam voluptas quas, suscipit beatae.</p>
        </Container>

        <Container className={styles.ad}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas officiis nostrum odio. Eveniet, sint saepe. Facilis, cupiditate et a qui autem ab vitae? Temporibus ut quidem ex suscipit eligendi deleniti, consectetur quibusdam ad. Officiis accusantium ipsa earum corporis recusandae sit cum vel rerum. Modi architecto autem vero harum repudiandae omnis. Soluta culpa tenetur reiciendis explicabo doloremque, placeat molestiae libero ipsam optio dignissimos aliquid iste obcaecati dolores animi reprehenderit quam quos sit provident! Ex ea qui recusandae, dignissimos necessitatibus accusantium repellat delecue magni? Tempore qui dolores reiciendis inventore voluptas similique, repellat, molestiae error eveniet expedita, exercitationem consequuntur nulla et optio blanditiis fugiat velit id distinctio sed odio. Corrupti modi saepe dolor, ipsum praesentium voluptate ab! Asperiores atque, repellat dignissimos accusantium quam, dolorem possimus aliquid deserunt culpa voluptatum neque in dolore perferendis rerum illo eaque iste. Tempora deleniti nulla eum laborum consectetur, minima voluptas ullam excepturi eaque suscipit assumenda, delectus atque sequi. Repellendus reprehenderit eos doloremque consectetur suscipit harum reiciendis veritatis. Omnis quibusdam architecto similique nisi.</Container>
      </main>
    </>
  )
}
