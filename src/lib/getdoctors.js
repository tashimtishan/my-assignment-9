export const getDoctors = async () => {
    const res = await fetch(`${process.env.API_URL}/doctors`);
    return res.json();
};