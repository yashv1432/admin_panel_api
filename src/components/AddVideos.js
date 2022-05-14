import React from 'react'

export default function AddVideos() {
    return (
        <div>
            <div className="container-fluid">
    <h2 className="title">Add Videos</h2>

    <form id="addvideos" method="post" enctype="multipart/form-data">
        <div className="form-group row">
            <label for="fname" className="col-sm-2 control-label">Filter By: </label>
            <div className="col-sm-9">
                <select name="filter_category" id="filter_category" required className="form-control">
                    <option value="">Select filter</option>
                    <option value="user_name">user name</option>
                    <option value="first_name">first name</option>
                    <option value="last_name"> last name</option>
                </select>
            </div>
        </div>
        <div className="form-group row" id="user_name">
            <label for="fname" className="col-sm-2 control-label">Select User Name: </label>
            <div className="col-sm-9">

                <input onkeyup="showResult(this.value)" autocomplete="off" id="user_data"
                    placeholder="Choose filter criteria to get user details" className="form-control" />
                <input type="hidden" id="fb_id"/>
                <div id="livesearch">

                </div>

                {/* <!-- <select className="form-control" id="fb_id" name="fb_id" value=""> -->
                <!-- <option value="">Select User Name </option> -->
                                <!-- <option value=""> -->
                                <!-- </option> -->
                                <!-- </select> --> */}
            </div>
        </div>

        <div className=" form-group row">
            <label alt="Video Like Count" className="col-sm-2 control-label">Select Category</label>
            <div className="col-sm-9">
                <select className="form-control" name="category_name" id="myselect1">
                                        <option value="65">UWO Influencers</option>
                                        <option value="58">laughterchallengewithuwo</option>
                                        <option value="51">UwoAdvertisemnet</option>
                                        <option value="25">Romantic</option>
                                        <option value="5">Dance</option>
                                        <option value="28">Trending</option>
                                        <option value="1">UnlimitedU</option>
                                        <option value="7">Music</option>
                                        <option value="4">Funny</option>
                                        <option value="10">Sports</option>
                                        <option value="11">Food</option>
                                        <option value="12">AnimalLover</option>
                                        <option value="13">Travel & Nature</option>
                                        <option value="16">Motivational</option>
                                        <option value="8">Health&Fitness</option>
                                        <option value="19">Gaming</option>
                                        <option value="20">WebSeries</option>
                                        <option value="21">Bike Life</option>
                                        <option value="23">Cricket For Life</option>
                                        <option value="27">ShayariKiDiary</option>
                                        <option value="26">TrickShot</option>
                                        <option value="30">PunjabiBeats</option>
                                        <option value="2">Entertainment</option>
                                        <option value="37">BollywoodMasala</option>
                                        <option value="38">RealityShow</option>
                                        <option value="17">Devotional</option>
                                        <option value="39">WeddingBells</option>
                                        <option value="34">Anime</option>
                                        <option value="41">Wrestling</option>
                                        <option value="42">Adventures</option>
                                        <option value="43">Fashion</option>
                                        <option value="45">Superheroes</option>
                                        <option value="48">OldIsGold</option>
                                        <option value="40">Others</option>
                                        <option value="9">Talent & Creativity</option>
                                        <option value="55">UWOQuotes</option>
                                        <option value="29">Festival</option>
                                        <option value="52">thiraktekadam</option>
                                        <option value="46">humhindustani</option>
                                        <option value="57">uwokiyaari</option>
                                        <option value="62">Apna man pasand</option>
                                        <option value="64">uwo garba mahosav</option>
                                        <option value="0" className="bg-danger text-white">Remove This video from category</option>
                </select>
            </div>

        </div>

        <div className=" form-group row">
            <label alt="Video Like Count" className="col-sm-2 control-label">Select Language</label>
            <div className="col-sm-9">
                <select className="form-control" name="language" id="myselect2">
                                        <option value="1">hindi</option>
                                        <option value="2">english</option>
                                        <option value="3">kannada</option>
                                        <option value="4">Odia</option>
                                        <option value="5">Gujrati</option>
                                        <option value="6">Punjabi</option>
                                        <option value="7">Marathi</option>
                                        <option value="8">Bengali</option>
                                        <option value="9">Tamil</option>
                                        <option value="10">Telugu</option>
                                        <option value="11">Assamese</option>
                                        <option value="12">Malayalam</option>
                                        <option value="13">Other</option>
                                        <option value="0" className="bg-danger text-white">Remove this language from video</option>
                </select>
            </div>

        </div>

        <div className="form-group row">
            <label for="fname" className="col-sm-2 control-label">Video Likes: </label>
            <div className="col-sm-3">
                <input type="text" name="video_likes" id="video_likes" required className="form-control"/>
            </div>
            <div className="col-sm-1"></div>
            <label for="fname" className="col-sm-2 control-label">Video Views: </label>
            <div className="col-sm-3">
                <input type="text" name="video_views" id="video_views" required className="form-control"/>
            </div>
        </div>
        <div className="form-group row">
            <label for="fname" className="col-sm-2 control-label"> Description:</label>
            <div className="col-sm-9">
                <textarea type="text" className="form-control" required name="description" id="description"
                    placeholder="Description"></textarea>
            </div>
        </div>

        <div className="form-group row">
            <label for="fname" className="col-sm-2 control-label">Hashatg Suggestion: </label>
            <div className="col-sm-9 form-control suggest_hashtag">
                            <div className="row">
                <div className="col-sm-10" id="hashtag_suggest"> 
                                            <a href="#" className="text-dark" id="tag38"onClick="addsuggestions(this.textContent,38)"> #tiptipbarsapani	</a>
                                            <a href="#" className="text-dark" id="tag37"onClick="addsuggestions(this.textContent,37)"> #bijleebijlee	</a>
                                            <a href="#" className="text-dark" id="tag26"onClick="addsuggestions(this.textContent,26)"> #UwoVideoAds	</a>
                                            <a href="#" className="text-dark" id="tag9"onClick="addsuggestions(this.textContent,9)"> #UnlimitedU	</a>
                                            <a href="#" className="text-dark" id="tag11"onClick="addsuggestions(this.textContent,11)"> #UWOTrending	</a>
                                            <a href="#" className="text-dark" id="tag12"onClick="addsuggestions(this.textContent,12)"> #BollywoodMasala	</a>
                                            <a href="#" className="text-dark" id="tag13"onClick="addsuggestions(this.textContent,13)"> #PunjabiTadka	</a>
                                            <a href="#" className="text-dark" id="tag19"onClick="addsuggestions(this.textContent,19)"> #Anime	</a>
                                            <a href="#" className="text-dark" id="tag21"onClick="addsuggestions(this.textContent,21)"> #AnimalLover	</a>
                                            <a href="#" className="text-dark" id="tag25"onClick="addsuggestions(this.textContent,25)"> #Superheroes	</a>
                                            <a href="#" className="text-dark" id="tag27"onClick="addsuggestions(this.textContent,27)"> #VintageChallange	</a>
                                            <a href="#" className="text-dark" id="tag33"onClick="addsuggestions(this.textContent,33)"> #humhindustani	</a>
                                            <a href="#" className="text-dark" id="tag30"onClick="addsuggestions(this.textContent,30)"> #thirakteykadam	</a>
                                    </div>
                <div className="col-sm-2 ">
                    <a href="#" onClick="fetchanewhashtag()"className="float-right">Show more </a>
                </div>
                </div>
            </div>
        </div>
        <div className=" form-group row">
            <label alt="Video Like Count" className="col-sm-2 control-label">Select Section </label>
            <div className="col-sm-9">
                <select className="form-control" name="section_name" id="myselect">
                                        <option value="135">uwoinfluencers</option>
                                        <option value="134">tiptipbarsapani</option>
                                        <option value="132">bijleebijlee</option>
                                        <option value="131">uwo garba mahotsav</option>
                                        <option value="130">Uwogarbamahotsav</option>
                                        <option value="128">uwokiyaari</option>
                                        <option value="127">HumHindustani</option>
                                        <option value="125">UWOQoutes</option>
                                        <option value="124">Fashion</option>
                                        <option value="122">RunAway</option>
                                        <option value="121">SugarCrush</option>
                                        <option value="118">UwoVideoAds</option>
                                        <option value="117">OyeHoyeHoye</option>
                                        <option value="112">NadiyonPaar</option>
                                        <option value="111">ShorMachega</option>
                                        <option value="110">Shweta</option>
                                        <option value="109">RabbaMeharKari</option>
                                        <option value="108">DontRushChallenge</option>
                                        <option value="107">PawriHoRahiHai</option>
                                        <option value="106">Devotional</option>
                                        <option value="103">ChorDenge</option>
                                        <option value="102">OldIsGold</option>
                                        <option value="101">PotterHead</option>
                                        <option value="97">Superheroes</option>
                                        <option value="95">Wrestling</option>
                                        <option value="91">AnimalLover</option>
                                        <option value="90">Sports</option>
                                        <option value="86">Food</option>
                                        <option value="85">EmojiChallenge</option>
                                        <option value="84">Fitness</option>
                                        <option value="82">TrickShots</option>
                                        <option value="81">BikeLife</option>
                                        <option value="80">Webseries</option>
                                        <option value="73">DilDostiDance</option>
                                        <option value="63">CoupleGoals</option>
                                        <option value="62">ShayariKiDiary</option>
                                        <option value="60">Gaming</option>
                                        <option value="58">BollywoodHungama</option>
                                        <option value="57">CricketForLife</option>
                                        <option value="55">Motivational</option>
                                        <option value="54">TravelNature</option>
                                        <option value="50">PunjabiTadka</option>
                                        <option value="48">WeddingSession</option>
                                        <option value="46">ArtCraft</option>
                                        <option value="40">Dance</option>
                                        <option value="6">Comedy</option>
                                        <option value="2">UnlimitedU</option>
                                        <option value="1">UWOTrending</option>
                                        <option value="0" className="bg-danger text-white">Remove This video from section</option>
                </select>
            </div>

        </div>

        <div className="form-group row">
            <label for="fname" className="col-sm-2 control-label ">Upload Video:</label>
            {/* <!-- <input type="hidden" name="uploaded_file[]" /> --> */}
            <div className="col-sm-9 dropzone" id="uploaded_file" name="uploaded_file">
                {/* <!-- certificate dropzone -->
                <!-- <input type="hidden" name="video[]" /> --> */}

                <div className="dz-message needsclick">
                    {/* <!-- Drop/click to upload Product Image. --> */}
                    <br />

                </div>

                <div className="link-div img-size">
                    {/* <!-- Minimum Size: 500x500 px, square, no transparency --> */}
                </div>
                <span for="#my-dropzone">
                    <label className="error"></label>
                </span>
                <span className="error" id="review_image_err" style={{padding: '10px'}}></span>
                {/* <!-- certificate dropzone --> */}
            </div>
        </div>
    </form>
    <div className="form-group row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4"> <button type="submit" className="btn btn-success" id="uploadfiles">Submit</button></div>
        <div className="col-sm-4"></div>
    </div>
    <div className="right col40">
    </div>
    <div className="clear"></div>
</div>
        </div>
    )
}
