
import Feed from '@components/Feed';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  
  return (
   <section className="w-full flex-center flex-col">
    <div class="relative">
    <Image class="hidden md:max-2xl:block"
     src="/assets/images/horizontalFeatured.png"
     width={1500}
     height={700}
    alt="Artists for artists"
     />
    <Image class="md:hidden" src="/assets/images/mobileFeatured.jpg"
     width={700}
     height={700}/>
    <Link href="https//shop.artko.ro/featured" className="absolute text-3xl font-bold text-black hover:text-primary-orange text-center top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">Featured this week
    <br className="max-md:hidden"/></Link>
    <button className="absolute top-1/8 left-1/2 -translate-x-1/2 -translate-y-1/2 amber_btn">Get Started</button>
   
    </div>
    
<p className="desc text-center">Artko is an artist run platform that highlights other artists works.
</p>
<Feed/>
</section>


  )
}

export default Home
