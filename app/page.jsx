
import Feed from '@components/Feed';
import Image from 'next/image';

const Home = () => {
  
  return (
   <section className="w-full flex-center flex-col">
    <div class="relative">
    <Image 
     src="/assets/images/digital_aquarella1.jpg"
     width={500}
     height={500}
     

     />
    <h1 className="absolute head_text text-center top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">Featured this week
    <br className="max-md:hidden"/></h1>
   
    </div>
    
<p className="desc text-center">Artko is an artist run platform that highlights other artists works.
</p>
<Feed/>
</section>


  )
}

export default Home
