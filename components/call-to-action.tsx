import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Your Notes, One Click Away
          </h2>
          <p className="mt-4 text-muted-foreground">
            Start writing, organizing, and revisiting notes that matter — fast
            and beautifully.
          </p>

          <div className="mt-10 lg:mt-12">
            <Button asChild size="lg" className="rounded-xl px-6 text-base">
              <Link href="/signup">
                <Rocket className="mr-2 size-5" />
                <span>Get Started for Free</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
