/* eslint-disable @typescript-eslint/no-explicit-any */
import {Fragment, useState} from 'react';
import type {Place} from '../api/Place';
import {search} from '../api/search';

interface LocationSearchProps {
    onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({onPlaceClick}: LocationSearchProps) {
    const [term, setTerm] = useState('');
    const [places, setPlaces] = useState<Place[]>([]);
    const [error, setError] = useState<{error: string}>({error: ''});

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const results: Place[] | {error: string} = await search(term);
        if (Array.isArray(results)) {
            setPlaces(results);
            setError({error: ''});
        } else if (!Array.isArray(results)) {
            setPlaces([]);
            setError(results);
        }
        setTerm('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className="font-bold" htmlFor="term">
                    Search
                </label>
                <input
                    className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
                    id="term"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    placeholder="Enter location address"
                />
            </form>

            <h1 className="font-bold mt-6">Found Locations</h1>
            <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
                {places.length > 0 &&
                    places.map((place) => {
                        return (
                            <Fragment key={place.id}>
                                <p className="text-sm">{place.name}</p>
                                <button
                                    type="button"
                                    className="bg-blue-500 text-xs text-white font-bold py-1 rounded"
                                    onClick={() => onPlaceClick(place)}>
                                    Go
                                </button>
                                <div className="border-b w-full col-span-2" />
                            </Fragment>
                        );
                    })}
                {places.length === 0 && error && (
                    <p className="text-sm">{error.error}</p>
                )}
            </div>
        </div>
    );
}
