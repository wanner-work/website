import InboxCraft from "../../crafts/inbox/components/InboxCraft";
import type CraftEntry from "../../interfaces/crafts/CraftEntry";

const CraftStore: {
    entries: CraftEntry[]
} = {
    entries: [
        {
            title: 'Inbox',
            description: 'A component for managing your inbox',
            component: InboxCraft
        }
    ]
}

export default CraftStore