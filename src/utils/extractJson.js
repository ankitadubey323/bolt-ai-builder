// export function extractJSON(text) {
//   if (!text) return null;

//   const firstBrace = text.indexOf("{");
//   const lastBrace = text.lastIndexOf("}");

//   if (firstBrace === -1 || lastBrace === -1) {
//     return null;
//   }

//   const jsonString = text.slice(firstBrace, lastBrace + 1);

//   try {
//     return JSON.parse(jsonString);
//   } catch (err) {
//     console.error("❌ JSON parse error:", err);
//     return null;
//   }
// }

export function extractJSON(text) {
  if (!text) return null;

  const firstBrace = text.indexOf("{");
  const lastBrace = text.lastIndexOf("}");

  if (firstBrace === -1 || lastBrace === -1) return null;

  const jsonString = text.slice(firstBrace, lastBrace + 1);

  try {
    return JSON.parse(jsonString);
  } catch (err) {
    console.error("❌ JSON parse failed:", err);
    return null;
  }
}
