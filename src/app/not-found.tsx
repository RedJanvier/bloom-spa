import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center bg-forest text-cream py-32">
      <Container className="text-center">
        <p className="font-script text-7xl text-blush">404</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-medium">
          This page took an early bath.
        </h1>
        <p className="mt-4 text-cream/80">
          The page you were looking for can&apos;t be found. Let&apos;s get you
          somewhere restorative.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="secondary">
            Back to home
          </Button>
          <Button
            href="/services"
            variant="outline"
            className="border-cream text-cream hover:bg-cream hover:text-forest"
          >
            See the menu
          </Button>
        </div>
      </Container>
    </section>
  );
}
