import { ExternalLink, Github, Linkedin } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Textarea } from './components/ui/textarea'
import { Separator } from './components/ui/separator'
import { Badge } from './components/ui/badge'
import { ThemeToggle } from './components/theme-toggle'

export default function App() {
  return (
    <>
    <div className='fixed top-4 right-4'>
      <ThemeToggle />
    </div>
    <div className='flex flex-col items-center justify-center gap-8 py-24'>
      <section className='w-1/2'>
        <div className='flex items-center justify-start w-full gap-4'>
          <Avatar className='w-48 h-48'>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold'>John Doe</h1>
            <p className='text-lg'>Software Engineer</p>
            <div className='flex items-center justify-start gap-2'>
              <Button variant='outline' size='icon' className='rounded-full'>
                <Linkedin className='w-4 h-4' />
              </Button>
              <Button variant='outline' size='icon' className='rounded-full'>
                <Github className='w-4 h-4' />
              </Button>
              
            </div>
          </div>
        </div>
      </section>
      <section className='w-1/2'>
        <Card className='w-full'>
          <CardHeader>
            <CardTitle>About</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </CardContent>
        </Card>
      </section>
      <section className='w-1/2'>
        <Card className='w-full'>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
              <div className='flex items-center justify-start gap-4'>
                <Avatar className='w-12 h-12'>
                  <AvatarImage src='https://github.com/shadcn.png' />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='flex-1'>
                  <h3 className='text-lg font-bold'>Project 1</h3>
                  <p className='text-sm text-gray-500'>The coolest project ever</p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                  <p className='text-sm text-gray-500'>2021 - 2023</p>
                  <Button variant='ghost' size='icon'>
                    <ExternalLink className='w-4 h-4' />
                  </Button>
                </div>
              </div>
              <Separator />
              <div className='flex items-center justify-start gap-4'>
                <Avatar className='w-12 h-12'>
                  <AvatarImage src='https://github.com/shadcn.png' />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='flex-1'>
                  <h3 className='text-lg font-bold'>Project 1</h3>
                  <p className='text-sm text-gray-500'>The coolest project ever</p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                  <p className='text-sm text-gray-500'>2021 - 2023</p>
                  <Button variant='ghost' size='icon'>
                    <ExternalLink className='w-4 h-4' />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
      </section>
      <section className='w-1/2'>
        <Card className='w-full'>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-wrap gap-2'>
            <Badge>
              <p>React</p>
            </Badge>
            <Badge>
              <p>React</p>
            </Badge>
            <Badge>
              <p>React</p>
            </Badge>
          </CardContent>
        </Card>
      </section>
      <section className='w-1/2'>
        <Card className='w-full'>
            <CardHeader>
              <CardTitle>Work</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
              <div className='flex items-center justify-start gap-4'>
                <Avatar className='w-12 h-12'>
                  <AvatarImage src='https://github.com/shadcn.png' />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='flex-1'>
                  <h3 className='text-lg font-bold'>Project 1</h3>
                  <p className='text-sm text-gray-500'>The coolest project ever</p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                  <p className='text-sm text-gray-500'>2021 - 2023</p>
                  <Button variant='ghost' size='icon'>
                    <ExternalLink className='w-4 h-4' />
                  </Button>
                </div>
              </div>
              <Separator />
              <div className='flex items-center justify-start gap-4'>
                <Avatar className='w-12 h-12'>
                  <AvatarImage src='https://github.com/shadcn.png' />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='flex-1'>
                  <h3 className='text-lg font-bold'>Project 1</h3>
                  <p className='text-sm text-gray-500'>The coolest project ever</p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                  <p className='text-sm text-gray-500'>2021 - 2023</p>
                  <Button variant='ghost' size='icon'>
                    <ExternalLink className='w-4 h-4' />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
      </section>
      <section className='w-1/2'>
        <Card className='w-full'>
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
              <div className='flex items-center justify-start gap-4'>
                <Avatar className='w-12 h-12'>
                  <AvatarImage src='https://github.com/shadcn.png' />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='flex-1'>
                  <h3 className='text-lg font-bold'>Project 1</h3>
                  <p className='text-sm text-gray-500'>The coolest project ever</p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                  <p className='text-sm text-gray-500'>2021 - 2023</p>
                  <Button variant='ghost' size='icon'>
                    <ExternalLink className='w-4 h-4' />
                  </Button>
                </div>
              </div>
              <Separator />
              <div className='flex items-center justify-start gap-4'>
                <Avatar className='w-12 h-12'>
                  <AvatarImage src='https://github.com/shadcn.png' />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='flex-1'>
                  <h3 className='text-lg font-bold'>Project 1</h3>
                  <p className='text-sm text-gray-500'>The coolest project ever</p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                  <p className='text-sm text-gray-500'>2021 - 2023</p>
                  <Button variant='ghost' size='icon'>
                    <ExternalLink className='w-4 h-4' />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
      </section>
      <section className='w-1/2'>
        <Card className='w-full'>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
              <Label>Email</Label>
              <Input placeholder='Email' />
              <Label>Message</Label>
              <Textarea placeholder='Message' />
            </CardContent>
            <CardFooter>
              <Button>Card Button</Button>
            </CardFooter>
          </Card>
      </section>
    </div>
    </>
  )
}
