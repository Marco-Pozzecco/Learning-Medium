type:: #documentation

# Introduzione ad Obsidian

Obsidian è un editor di testo costruito su linguaggio di markup chiamato [Markdown](https://it.wikipedia.org/wiki/Markdown).
Tale linguaggio può facilmente essere convertito in HTML, il che rende Obsidian molto versatile.

## Sintassi di base

Headings
Gli heading da 1 a 6 si scrivono con la seguente sintassi:
- `# Heading di primo livello`
- `## Heading di secondo livello`
- etc.

**Bold**
- `**Testo**`

*Italic*
- `*Testo*`

`inline code (metti sopra il cursore)`

I link si dividono in:
- Wikilink `[[wikilink]]`
	- Obsidian offre la possibilità di aggiungere un alias `[[wikilink|alias]]`
	- Oltre che connettere a particolari parti di un documento come un blocco o un header, es. `[[README#Sintassi di Markdown]]`.
- Markdown link `[alias](protocollo://dominio/path)`

Un blocco di codice si aggiunge con il triplice tick:
```HTML
<!-- come segue: ``` -->
```

Latex inline: `$contenuto$`
Latex block:
```
$$
contenuto
$$
```

Latex permette di scrivere simboli propri della matematica:
$$
f(x) = \frac{x(x-1)}{2}
$$

