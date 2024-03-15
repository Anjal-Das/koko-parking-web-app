import TabButton from "./components/Tabs/tab-button";
import TabWrapper from "./components/Tabs/tab-wrapper";
import Header from "./components/header";
import Modal from "./components/modal/modal";
import Ticket from "./components/ticket";


export default function Home() {
  return (
    <main className="md:mx-[100px]">
      <Header />
      <div className="mt-10">
        <TabWrapper>
          {["All", "Parking one", "Parking two"].map((x) => (
            <TabButton
              key={x}
              label={x}
              onClick={() => {}}
              selected={x === "All"}
            />
          ))}
        </TabWrapper>
        <Modal />
        <div className="flex flex-wrap gap-4 my-10 justify-center sm:justify-start items-center ">
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
        </div>
      </div>
    </main>
  );
}
