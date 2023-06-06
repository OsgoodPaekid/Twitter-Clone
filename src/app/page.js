import Sidebar from "../../components/Sidebar/page";

export default function app() {
  return (
    <ul>
      <Sidebar />
      <button class="rounded-full">Tweet</button>
    </ul>
  );
}