
import { Metadata } from 'next';
import SideNav from '@/app/ui/dashboard/sidenav';
import { LinkCard } from '@/app/ui/dashboard/my-cards';
// import { AccordionExpandDefault } from '@/app/ui/dashboard/my-form';
import { mono, inconsolata } from '@/app/ui/fonts';



export const metadata: Metadata = {
  title: 'Landing Page',
};


export default async function Page() {
  const linkTitle = "Useful links for you!";
  const formTitle = "Resistor Calculator"

  return (
    <main className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52"> */}
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      
      <div className="flex lg:p-12 p-6 w-full overflow-y-auto">
        <div className="flex grow flex-wrap justify-center gap-4 bg-gray-50 shadow p-16 ">

        

        <div className="m-auto overflow-clip shadow p-4 rounded bg-gray-100">
              <h1 className={`${mono.className} text-xl text-center`}>Welcome to my Personal Website!</h1>  

              <p className={`${mono.className}`}>
                My name is Carlos A Toledo Jr and I am an University of Illinois, Urbana - Champaign 2023 Alumni with a BS in Computer Engineering. This Website will contain my work history, school involvement, a mixture of school projects and soon more personal projects. 
                <br />
                <br />

                Take a look at each of my pages and please feel free to contact me with ideas or suggestions!

              </p>

              
            </div>

        {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={12}>
              
          </Grid>

          <Grid xs={4}>
            <LinkCard title={linkTitle} />
          </Grid>
        </Grid> */}





       

        
        {/* <AccordionExpandDefault title={formTitle} /> */}
        
        </div>
      </div>
    </main>
  );
}