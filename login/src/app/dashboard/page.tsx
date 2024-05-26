import { LogoutComponent } from "@/components/Logout";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

const Dashboard = async () => {
    const session = await getServerSession();

    if (!session) {
        redirect('/')
    }

    return (
        <div>
            <p>Olá, {session?.user?.name}</p>
            <h1>Welcome to Dashboard</h1>

            <LogoutComponent />
        </div>
    )
}

export default Dashboard;