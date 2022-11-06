/* eslint-disable eqeqeq */
let names = []
let dayActive = true
let day = 1
const events = [
    '{name}1 postfarms.',
    '{name}1 creates an effort post. Good job {name}1!',
    '{name}1 reaction farms in forum games.',
    '{name}1 and {name}2 randomly take up a chant of "THONK".',
    '{name}1 reaction spams {name}2.',
    '{name}1 and {name}2 start a convo to conspire against others.',
    '{name}1 receives a GMerald.',
    '{name}1 tries to escape by taking a break, yet fails. The pull is too strong.',
    '{name}1 downloads grammarly.',
    '{name}1 receives a YouTuber redstone.',
    '{name}1 lurks.',
    '{name}1 and {name}2 postfarm together in the Random Chat.',
    "{name}1 reads every page of {name}2's profile.",
    '{name}1 vows to never leave.',
    '{name}1 says something unironically which becomes a copypasta.',
    '{name}1 and {name}2 reaction trade 25 times.',
    '{name}1 shitposts.',
    'My name is {name}1! I like the number 8 in roman numerals so thats why my name is {name}1.',
    '{name}1 follows {name}2.',
    '{name}1 shoots a flaming arrow, starting a flamewar between {name}2 and {name}3. {name}1 watches the chaos unfold.',
    '{name}1 and {name}2 have a civil political discussion.',
    '{name}1 experiences forum addiction, foruming well into the night.',
    '{name}1 shares blackmail screenshots of things {name}2 said with {name}3.',
    '{name}1 hates on the admins.',
    '{name}1 becomes a slay bestie. SLAY!!!!',
    '{name}1 reveals a minor personal detail about themself, {name}2 gets out the red string.',
    '{name}1 quits the forums only to come back under a day later.',
    '{name}1 hits 10k positives.',
    '{name}1 hits forum nerd.',
    '{name}1 hits 100 messages.',
    '{name}1 hits 100k messages.',
    '{name}1 posts pictures of farms. {name}2, {name}3, and {name}4 quickly follow. Totally not postfarming!',
    'It is discovered that {name}1 is secretly {name}2\'s alt',
    '{name}1 creates "ily{name}2" accounts.',
    '{name}1 eats pickles.',
    '{name}1 posts a picture of their cat, receiving the mosts positives of any off-topic post this month.',
    '{name}1 calls Saul.',
    '{name}1 makes lemon bars.',
    '{name}1 drinks water.',
    '{name}1 moves to Ohio.',
    '{name}1 begs {name}2 to give them a dislike, but they refuse.',
    '{name}1 and {name}2 have a "civil" conversation regarding politics including passive agressive remarks about fact checking.',
    '{name}1 visits Ohio.',
    '{name}1 and {name}2 edate.',
    '{name}1 abandons their postfarming ways to become a profile main.',
    '{name}1 slays and eats.',
    '{name}1 hits Forum Legend.',
    '{name}1 hits 1k messages.',
    '{name}1 hits 1k positives.',
    '{name}1 and {name}2 reaction spam {name}3.',
    '{name}1 makes a big brain math post.',
    '{name}1 stages a revolution.',
    '{name}1 cooks some popcorn.',
    '{name}1 yells at {name}2 to go to sleep until they eventually give in.',
    '{name}1 compiles over a hundred forumers personal details in a spreadsheet.',
    '{name}1 reads.',
    '{name}1 buys lemons.'
]
const deaths = [
    '@death{name}1 loses against {name}2 in the forumer showdown.',
    '@death{name}1 is caught uwuing by {name}2, who gifts them a dislike for it.',
    '@death{name}1 postfarms 400 messages in one day, causing them to get banned.',
    '@death{name}1 loses a pfp bet against {name}2.',
    '@death{name}1 somehow manages to leave the forums.',
    '@death{name}1 and @death{name}2 want to end the torture that is the Hypixel forums, so they trade dislikes.',
    '{name}1 trys to hype train @death{name}2, but instead hits the dislike button. They feel great remorse afterwards, and cry themself to sleep',
    '@death{name}1 and @death{name}2 get into a political flamewar, causing them to both be disliked and banned',
    '{name}1 dislike spams @death{name}2 for no apparent reason',
    '@death{name}1 gets infected by the catgirl virus.',
    "After being unfollowed by @death{name}1, {name}2 roasts them over boiling heat with \"Nice unfollow. You thought I wouldn't notice, did you? I had some genuine hopes for your future but you threw all that out of the window… Blocked + ratio + don’t care + generic newgen\".",
    '@death{name}1 and @death{name}2 edate, causing them to be disliked by {name}3.',
    '@death{name}1 spam reports old necroposts, causing them to receive a ban.',
    '{name}1 makes a thread publicly exposing and canceling @death{name}2. {name}1 somehow does not get banned, even though they publicly exposed someone.',
    '@death{name}1 starts a drawing pfps thread, but quickly got buried in requests',
    '@death{name}1 hits 150 followers, one of which was IRL.',
    '@death{name}1 gets banned for saying ":("',
    '@death{name}1 was found to be alt abusing and got banned.',
    '@death{name}1 makes extremist political posts and gets banned.',
    '@death{name}1 posts pictures of literal poop.',
    '@death{name}1 takes the advice of forumers, causing them to ruin all chances of ever dating their crush.',
    '@death{name}1 takes the advice of a forumer and lies to their parents.',
    '@death{name}1 was roasted to death by a rabid combo between a snake and a dog.',
    '@death{name}1 becomes a juju non.',
    '@death{name}1 gets ratioed by {name}2.',
    '@death{name}1 simps for {name}2. {name}3 sees this and dislikes @death{name}1 because of it.',
    '@death{name}1 was given a massive skill issue by Centranos.',
    '@death{name}1, @death{name}2, @death{name}3, @death{name}4, @death{name}5 start a profile chat and get banned.',
    '@death{name}1 leaves forums after losing to @death{name}2 in showdown and then becomes a Wynncraft forumer and then gets permed.',
    '@death{name}1 didn\'t call Saul.',
    '@death{name}1 impersonates {name}2, gets banned.',
    "a supernotifmentionprofilepost is started by {name}1. At first it's all fun and games, but people quickly get annoyed. @death{name}2 gets buried in the notifications. @death{name}3 endlessly annoys people with the notifs after being asked to stop, getting dislikes.",
    '{name}1 makes lemon bars and a flamewar starts up, causing the two main culprits - @death{name}2 and @death{name}3 - to be punished.',
    '@death{name}1 was trampled by the mushroom.',
    '@death{name}1 says they are about to touch grass. They are never seen again.',
    '@death{name}1 wins the forumer showdown and becomes infatuated with ego. They begin to think they are the best.',
    '@death{name}1 makes a credit card details joke. The admins do not find it funny.',
    '@death{name}1 makes a joke about doxxing {name}2. The admins did not see the humor in it.',
    '@death{name}1 spams low quality copypasta posts until they eventually get banned.',
    '@death{name}1 makes a post about a random thing that happened to them IRL. Unfortunately, {name}2 didn\'t ask. Ouch!',
    '{name}1 makes a controversial bait post. @death{name}2 failed to see their true intentions, spending their entire day arguing with them before passing out because of exhaustion.',
    '{name}1 posts pictures of their cat. @death{name}2 says they don\'t like cats, a post that promptly gets them canceled by the entirety of the forums.',
    '@death{name}1 loses in the forumer showdown to {name}2 solely because @death{name}1 voted for {name}2 instead of themself.',
    'Unaware of milestone dislikers, @death{name}1 makes a thread to celebrate 1k messages that gets disliked by {name}1.',
    '{name}1 posts a rick roll link. {name}2 and {name}3 see through it, but @death{name}4 and @death{name}5 fall victim to it.',
    '@death{name}1 makes a low effort shitpost which gets disliked by {name}1',
    '@death{name}1 accidentally disables Darkpixel. The light mode blinds them.',
    '@death{name}1 has a mid-teen-life criss, they ask what they\'re doing with their life and promptly leave, never to be seen again.',
    '@death{name}1 quits. Something about "more important life priorities" smh.'
]
let fallenTributes = []

document.getElementById('submit-contestants').onclick = Start
document.getElementById('proceed').onclick = proceed
document.getElementById('import-button').onclick = () => document.getElementById('import-box').className = '';
document.getElementById('export-button').onclick = ExportSetup
document.getElementById('export-button-end').onclick = ExportSetup
document.getElementById('close-export-box').onclick = () => document.getElementById('export-box').className = 'hidden';
document.getElementById('menu-button').onclick = () => window.location.reload()

function SaveAmount (participants) {
    if (participants <= 1) {
        window.alert('Must have at least two participants')
        return false
    }
    document.getElementsByClassName('amount-input')[0].hidden = true
    const div = document.getElementsByClassName('contestant-template')[0]
    const nameInput = document.getElementsByClassName('name-input')[0]
    for (let i = 0; i < participants; i++) {
        const clone = div.cloneNode(true)
        clone.className = 'contestant'
        nameInput.prepend(clone)
    }
    div.classList.add('hidden')

    window.sessionStorage.clear()
    nameInput.style.display = 'block'
}

function Start () {
    const divs = document.getElementsByClassName('contestant')
    for (const i in divs) {
        if (divs?.[i]?.children?.[1]?.value == '') {
            window.alert('All names must have at least one character')
            return
        }
        names.push(divs?.[i]?.children?.[1]?.value)
    }
    names = names.filter(n => n)
    console.log(names.join(', '))

    window.sessionStorage.setItem('names', names.join(','))
    window.sessionStorage.setItem('ogNames', names.join(','))
    window.sessionStorage.setItem('deathChance', document.getElementsByName('death-chance')[0].value / 100)
    window.sessionStorage.setItem('censor', document.getElementsByName('censored-checkmark')[0].checked)

    document.getElementById('tribute-list').innerText = names.join('\n \n')
    document.getElementById('entry').classList.add('hidden')
    document.getElementById('game-phase').style.display = 'block'
}

function proceed () {
    if (day == 1) {
        document.getElementById('proceed').classList.remove('hidden')
        document.getElementById('export-button-end').classList.add('hidden')
    }
    if (!document.getElementById('name-confirmation').classList.contains('hidden')) {
        document.getElementById('name-confirmation').classList.add('hidden');
    }
    if (dayActive) {
        if (names.length == 1) {
            document.getElementById('winner-text').innerText = `The winner is ${names[0]}!`
            document.getElementById('game-end').style.display = 'block'
            document.getElementById('fallen').classList.add('hidden')
            document.getElementById('proceed').classList.add('hidden')
            document.getElementById('export-button-end').classList.remove('hidden')
        } else if (names.length < 1) {
            document.getElementById('winner-text').innerText = 'Nobody won. Common forums L'
            document.getElementById('game-end').style.display = 'block'
            document.getElementById('fallen').classList.add('hidden')
            document.getElementById('proceed').classList.add('hidden')
            document.getElementById('export-button-end').classList.remove('hidden')
        } else {
            Generate()
            dayActive = false
        }
    } else {
        Night()
        dayActive = true
    }
}

async function Generate () {
    document.getElementById('day-number').innerText = `Day ${day}`
    names = window.sessionStorage.getItem('names').split(',')

    const tbd = names
    let i = 0
    const GeneratedEvents = []
    const censor = window.sessionStorage.getItem('censor')

    while (tbd.length !== 0) {
        let event = await GetEvent(tbd.length)
        const count = GetNameCount(event)

        const people = []

        for (let i = 0; i < count; i++) {
            const person = tbd[Math.floor(Math.random() * tbd.length)]
            tbd.splice(tbd.indexOf(person), 1)
            people.push(person)
            if (event.substring(event.indexOf(`{name}${i + 1}`) - 6, event.indexOf(`{name}${i + 1}`)).includes('@death')) {
                fallenTributes.push(person)
            }
        }

        event = event
            .replaceAll('@death{name}1', `<span style="color:#FB607F">${people[0]}</span>`).replaceAll('@death{name}2', `<span style="color:#FB607F">${people[1]}</span>`).replaceAll('@death{name}3', `<span style="color:#FB607F">${people[2]}</span>`).replaceAll('@death{name}4', `<span style="color:#FB607F">${people[3]}</span>`).replaceAll('@death{name}5', `<span style="color:#FB607F">${people[4]}</span>`)
            .replaceAll('{name}1', `<span style="color:orange">${people[0]}</span>`).replaceAll('{name}2', `<span style="color:orange">${people[1]}</span>`).replaceAll('{name}3', `<span style="color:orange">${people[2]}</span>`).replaceAll('{name}4', `<span style="color:orange">${people[3]}</span>`).replaceAll('{name}5', `<span style="color:orange">${people[4]}</span>`)
            .replaceAll('shit', censor == 'true' ? '****' : 'shit')
        GeneratedEvents.push(event)
        i += people.length
    }

    document.getElementById('day-events').innerHTML = GeneratedEvents.join('<br> <br>')

    document.getElementById('fallen').classList.add('hidden')
    document.getElementById('day').style.display = 'block'
}

function Night () {
    names = window.sessionStorage.getItem('names').split(',')
    names = names.filter((el) => !fallenTributes.includes(el))
    document.getElementById('fallen-number').innerText = `Fallen Forumers ${day}`
    document.getElementById('living-amount').innerText = `${names.length} forumers remain.`
    document.getElementById('fallen-amount').innerText = `${fallenTributes.length} ban hammer clangs can be heard in the distance.`
    document.getElementById('fallen-contestants').innerText = fallenTributes.join('\n')

    document.getElementById('day').style.display = 'none'
    document.getElementById('fallen').classList.remove('hidden')

    window.sessionStorage.setItem('names', names.join(','))
    fallenTributes = []
    day++
}

function GetNameCount (event) {
    const ptrn = /{name}([0-9]+)/g
    const matches = event.match(ptrn)
    let count = 1
    if (matches != null && matches.length > 1) {
        for (let i = 0; i < matches.length; i++) {
            const num = matches[i].slice(-1)
            count = num > count ? num : count
        }
    }
    return count
}

async function GetEvent (pplCount) {
    let event = randomEvent()
    let eCount = GetNameCount(event)
    while (pplCount < eCount) {
        event = randomEvent()
        eCount = GetNameCount(event)
    }

    return event
}

function randomEvent () {
    const deathChance = window.sessionStorage.getItem('deathChance')
    return Math.random() > deathChance ? events[RandomRange(0, Math.floor(Math.random() * events.length))] : deaths[RandomRange(0, Math.floor(Math.random() * deaths.length))]
}
function RandomRange (min, kylomax) {
    return Math.floor(Math.random() * (kylomax - min + 1)) + min
}

function ExportSetup () {
    const data = []
    data.push(document.getElementsByName('death-chance')[0].value)
    const divs = document.getElementsByClassName('contestant')
    for (const i in divs) {
        if (divs[i].children) {
            if (divs?.[i]?.children?.[1]?.value == '') {
                window.alert('All names must have at least one character')
                return
            }
            data.push(divs?.[i]?.children?.[1]?.value)
        }
    }

    const dataStr = data.join(', ')
    document.getElementById('export-output').value = dataStr
    document.getElementById('export-box').className = ''
    console.log(dataStr)
}

function ImportSetup (data) {
    const divs = document.getElementsByClassName('contestant')
    console.log(data)
    document.getElementsByName('death-chance')[0].value = data[0]
    data.shift()

    if (divs.length) {
        while (divs.length) {
            const div = divs[0]
            divs.shift()
            div.remove()
        }
    }
    if (SaveAmount(data.length) === false) { return }
    for (i in divs) {
        if (divs[i].children) {
            divs[i].children[1].value = data[i]
        }
    }

    document.getElementById('entry').classList.remove('hidden')
    document.getElementById('home').classList.add('hidden')
    document.getElementById('game-phase').classList.add('hidden')
    document.getElementById('game-end').classList.add('hidden')
    document.getElementById('import-box').className = 'hidden'
}

window.addEventListener('click', (event) => {
    const eID = event.target.id
    if (eID == 'submit-amount') {
        SaveAmount(document.getElementsByName('amount')[0].value)
    } else if (eID == 'custom-button') {
        document.getElementById('home').classList.add('hidden')
        document.getElementById('entry').classList.remove('hidden')
    } else if (eID == 'import') {
        ImportSetup(document.getElementById('import-input').value.split(', '))
    } else if (eID == 'close-import') {
        document.getElementById('import-box').classList.add('hidden')
    }
})
