I used the setup guide from [JP Mining Note](https://arbyste.github.io/jp-mining-note/setup/) <br>

We are using the `jp mining note` or more commently known as `Anime cards`.

# JP Mining Note Type

## Installing

The same steps are also found in the [guide](https://arbyste.github.io/jp-mining-note/setup/).

## Automatic way
If you have python installed and basic git and command line knowledge, <br> you can use the automatic method of installing the note type: <br>
``` 
git clone "https://github.com/arbyste/jp-mining-note.git"
cd jp-mining-note

:: Ensure you have Anki open, and with anki-connect running
:: Also ensure that you have python 3.10+ installed.
:: It *MAY* work with lower versions of python, but I make no such guarantee. ;)
python tools\install.py
```


## Manual way
Download the Note Type:

- Go to the [release page](https://github.com/arbyste/jp-mining-note/releases)
- Download `{version}-jpmn_example_cards.apkg`

Import the Note Type to Anki:

- Open Anki
- Go to `File`
- `Import...` the `jpmn_example_cards.apkg`

Download the custom fonts:

- Download the 4 `.otf` files from the [media folder](https://github.com/arbyste/jp-mining-note/tree/master/media)
- Click on the `.otf` file
- Click on the download button at the top right

Import the custom fonts to Anki:

- Press `WinKey` + `r`
- Enter `%Appdata%`
- Navigate to `Anki2/YOUR_PROFILE_NAME/collections.media`
- Move the 4 `.otf` files into the `media folder`

## Verfying the Note Type

See [JP Mining Note](https://arbyste.github.io/jp-mining-note/setup/)

You sould see a new deck `JPMN-Examples` in your collection.

- Go to `Browse`
- Select `JPMN-Examples`
- Press `Preview`

View one of the cards an mkare sure, the card looks similar to the one in the pictures below:

![JP Note Type light](../assets/images/Verifying_JP_Note_Type_light.png){ align=left, width=350 }
![JP Note Type dark](../assets/images/Verifying_JP_Note_Type_dark.png){ align=left, width=350 }

(The following list is a one to one copy from the Setup Page from [JP Mining Note](https://arbyste.github.io/jp-mining-note/setup/))

1. The fonts should match with the above example. <br>If the fonts don't match, try restarting Anki. <br>If the fonts still don't match, the note was likely installed with "Option 2: The Manual Way". <br>Please verify you manually installed the fonts and placed them in the correct folder (see steps 3 and 4).

2. Notice how at the top left corner, the info circle (the "i" encased within the circle) is the default grey color. <br>If this circle is red or orange, there may be something wrong with the template. Please see this section for basic troubleshooting.

3. Clicking on the image to zoom should work out of the box. <br> Kanji hover may not work yet. If it doesn't work, read the Anki-Connect setup instructions on the next page. <br>If the image suddenly appears without a zoom animation, then you must [enable animations on Anki](https://arbyste.github.io/jp-mining-note/setupanki/#enable-animations-2161-2163).

4. If the furigana on your card seems to appear higher above the kanji compared to the picture, see the [Fix Ruby Positioning](https://arbyste.github.io/jp-mining-note/uicustomization/#fix-ruby-positioning-for-legacy-anki-versions) option.

5. If the frequency list on the top right appears to be squished (with no spacing between the elements) see the FAQ on [fixing the frequency list display](https://arbyste.github.io/jp-mining-note/faq/#the-frequency-list-display-looks-squished).


## How do I use the JP Mining Note?

Please check how to use the jp mining note and how you can change the settings to suite your preferences. <br>
For that whatch the Videos under `Gui`, `Fields` and `Card Creation` form [JP Mining Note Homepage](https://arbyste.github.io/jp-mining-note/).

# CSS Injector

For reference, see [CSS Injector by JP Mining Note](https://arbyste.github.io/jp-mining-note/setupanki/#css-injector).

[CSS Injector](https://ankiweb.net/shared/info/181103283) Number: `181103283`

Delete the old `field.css` and `editor.css`:

- Press `WinKey` + `r`
- Enter `%Appdata%`
- Navigate to `Anki2\addons21\181103283\user_files`
- Delete `field.css` and `editor.css`

Or simply open a command prompt and:
```
:: be sure to change USERNAME to your computer username!

del "C:\Users\USERNAME\AppData\Roaming\Anki2\addons21\181103283\user_files\field.css"
del "C:\Users\USERNAME\AppData\Roaming\Anki2\addons21\181103283\user_files\editor.css"
```

Creating a Symbolic link to the new `field.css` and `editor.css`:

**Make sure to change**: <br>
`USERNAME` to your computer username <br>
`PROFILENAME` to your Anki profile name <br>

Open cmd:

- Press `WinKey`
- Enter `cmd`

After that **change the `USERNAME` and `PROFILENAME`!** <br>
and enter the following command:
```
:: be sure to change USERNAME to your computer username and PROFILENAME to your Anki profile.
:: There are **two** USERNAME's to replace, and **one** PROFILENAME to replace
:: in the commands below.
:: Make sure to replace all the fields!

mklink "C:\Users\USERNAME\AppData\Roaming\Anki2\addons21\181103283\user_files\field.css" "C:\Users\USERNAME\AppData\Roaming\Anki2\PROFILENAME\collection.media\_field.css"
mklink "C:\Users\USERNAME\AppData\Roaming\Anki2\addons21\181103283\user_files\editor.css" "C:\Users\USERNAME\AppData\Roaming\Anki2\PROFILENAME\collection.media\_editor.css"
```

After that, restart Anki and check if your installation was successful; <br>
it should look like this:

![CSS Injector example](../assets/images/CSS_Injector.png){ align=left, width=350 }

# Edit AJT Japanese Config

!!! Note

    Unfortunately, we need to override the newest version of `AJT Japanese` because we can't change the config file easily anymore.
    If you don't want to do this, you can download my [config file](https://www.dropbox.com/scl/fi/eyuhq0hgvq8ceh7hbxpov/AJT_Japanese_Config.json?rlkey=zw6eyhob50fz4122pj5h7m53n&dl=0) and configure the `AJT Japanese` options manually (**not** recommended): <br>
    see: [JP Mining Note Anki config-changes](https://xelieu.github.io/jp-lazy-guide/)

Download the AJT Japanese Add-on from my [Dropbox](https://www.dropbox.com/scl/fi/sj5tlvyf6qxwq6b8kwilx/1344485230.zip?rlkey=vf9h90537o8j0kgqe9nwucyp8&dl=0)

Installation:

- Press `WinKey` + `r`
- Enter `%Appdata%`
- Navigate to `Anki2\addons21`
- Paste the `AJT Japanese` Add-on into this folder
- Restart Anki 

# Yomitan Anki settings

For reference, see [CSS Injector by JP Mining Note](https://arbyste.github.io/jp-mining-note/setupyomichan/#yomichan-fields).

Go to Anki and create a new deck for mining:

- Press `Add`
- Select the `Japanese Mining Note`
- Click on `Deck`
- Click on `Add`
- Create a new deck, e.g., "Mining"

For your information, if you want to create subdecks, you can easily do so by putting `::` in the name. For example, if you want to have a subdeck named "YouTube", you would add a deck named `Mining::YouTube`.

Go to Yomitan Setting:

- Navigate to the `Anki` section
- Select `Anki card format...`
- Set `Deck` to your newly created Anki deck
- Set `Model` as `JP Mining Note`

For more settings, see how the [JP Mining Template works](https://arbyste.github.io/jp-mining-note/).
