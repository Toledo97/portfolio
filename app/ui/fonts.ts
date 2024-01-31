import { Inter, Lusitana , Space_Mono, Inconsolata} from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });

export const mono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
}); 

export const inconsolata = Inconsolata({
  weight: ['400', '700'],
  subsets: ['latin'],
});