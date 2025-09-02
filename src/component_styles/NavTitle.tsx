import style from './NavTitle.module.css';
export default function NavTitle({ title, className = "" }: { title: string; className?: string }) {
    return (
        <div className={`${style.titleCont} ${className}`}>
            <h1>{title}</h1>
        </div>
    );
}