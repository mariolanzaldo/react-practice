
interface PhoneNumberProps {
    phone: string;
}

function PhoneNumber({ phone }: PhoneNumberProps) {
    const codeArea = phone.substring(0, 3);
    const rest = phone.substring(3);    
    return (
        <span>
            ({codeArea}) - {rest}
        </span>
    );
}

export default PhoneNumber;
