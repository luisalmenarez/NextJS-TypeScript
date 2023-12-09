import Container from "@/Components/Ui/Container";
import Title from "@/Components/Ui/Title";
import Form from "./utils/Form";

const ContactPage = () => {
  return (
    <main className="pb-10 border-b border-gray-500/30">
      <Container>
        <Title title="Contáctame!" />
        <p className="text-gray-500 mb-10 w-5/6">
          Si quieres hablar de un posible proyecto o simplemente saludarme, no
          dudes en enviarme un mensaje o un correo electrónico a
          <span className="text-white ml-1">luisalmenarez@gmail.com</span>
        </p>
        <Form />
      </Container>
    </main>
  );
};

export default ContactPage;
